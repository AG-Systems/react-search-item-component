import React from 'react';

class Item extends React.Component
{
  getHighlightedText(text, higlight) {
      // Split on higlight term and include term into parts, ignore case
      let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
      return <span> { parts.map((part, i) => 
          <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: "#21ce99", color: "black" } : {} }>
              { part }
          </span>)
      } </span>;
  }  
  render()
  {
    let val;
    if(this.props.type === "title")
    {
      val = <div><h4 className="card-title"> { this.getHighlightedText(this.props.title, this.props.searched) }</h4><p className="card-text">{this.props.links[this.props.index]["description"]}</p></div>;
    }
    else
    {
      val = <div><h4 className="card-title">{ this.props.links[this.props.index]["title"] } </h4><p className="card-text">{ this.getHighlightedText(this.props.links[this.props.index]["description"], this.props.searched) }</p></div>;
    }
    return(
              <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", backgroundColor: "rgba(60, 60, 60, .2)" }} key={this.props.index} >
                <img className="card-img-top" src={this.props.links[this.props.index]["img"]} alt="Card image cap" />
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  { val }
                  <a href={"/watch/" + this.props.links[this.props.index]["hashed_url"] } className="btn btn-mycolor" style={{ color: "white"}}>View Video</a>
                </div>
              </div>
      );
  }
}

class Search extends React.Component 
{ 
  constructor(props) {
    super(props);
    this.state = {search_term: ""}; //if you want to hide the results intially, this.state = {search_term: "-"};
  }
  onChange(event) 
   {
    this.setState({search_term: event.target.value});
  }
  search(type)
  {
    var javascript_side_json = this.props.data;
    var links = [];
    // var javascript_side_json = JSON.stringify(javascript_side_json);
    var javascript_side_json = JSON.parse(javascript_side_json);
    var str = this.state.search_term.toLowerCase();
    if(str === "" && str.length === 0)
    {
        var list = Object.keys(javascript_side_json).filter(function(key) {
            var term = javascript_side_json[key][type].toLowerCase();
            if (term.indexOf(str) !== -1)
            {
              links.push(javascript_side_json[key]);
              return javascript_side_json[key][type]
            }
        }).map(function(key) {
            return javascript_side_json[key][type];
        });
      
        return [list,links]; 
      }
      else
      {
          let counter = 0;
          var list = Object.keys(javascript_side_json).filter(function(key) {
              var term = javascript_side_json[key][type].toLowerCase();
              if (term.indexOf(str) !== -1 && counter < 6)
              {
                links.push(javascript_side_json[key]);
                counter += 1
                return javascript_side_json[key][type]
              }
          }).map(function(key) {
              return javascript_side_json[key][type];
          });
        
          return [list,links];         
      }
  }
  render() 
  {

    var list = [];
    var links = [];
    for(var section = 0; section < this.props.section_list.length; section++)
    {
        list.append(this.search(section_list[section])[0])
        links.append(this.search(section_list[section])[1]) 
    }
    //list = [this.search("title")[0], this.search("description")[0]];
    //links = [this.search("title")[1], this.search("description")[1]];
    if(this.state.search_term === "")
    {
      list[1] = [];
    }
    var input_style = {
    	width:'100%',
    	margin: '0 auto'
    };
    
    let divh1;
    if(list[0].length > 1 )
    {
      let divh1 = { width: "100%", minHeight: "200px"};
    }
    else
    {
      let divh1 = { width: "100%"};
    }
    
    let searched = this.state.search_term;
    return ( 
      <div>
        <br/>
        <div className="form-group" style={{ width: "40%", margin: "0 auto"}}>
          <label htmlFor="exampleInputEmail1"></label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search For Title & Description" onChange={this.onChange.bind(this)} />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <br/>
        {this.props.section_list.map(function(item, index_section)
        {
            return(
                <div>
                    <h1 style={{ textAlign: "left"}}> { this.props.section_list[index_section]} </h1>
                    <div style={ divh1 } className="card-group">
                    {list[index_section].map(function(a, index) {
                         return (
                             <div style={{ paddingLeft: "7px", paddingRight: "7px"}} key={index}>
                                  <Item title={a} links={links[index_section]} index={index} type={this.props.section_list[index_section]}  key={index} searched={searched}/>
                             </div>
                         );
                     })}
                  </div>                     
                </div>
            );
       
        })}
      </div>
        );
  }
}
  
export default Search;