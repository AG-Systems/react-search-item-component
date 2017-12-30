# React Search Item
![alt text](https://puu.sh/yQybW/dc8deda483.png "Search")

![alt text](https://puu.sh/yQygG/8b65c0bba6.png "Example highlight")

Example:


``` JSX
import React from 'react';
import Search from 'react-search-item';

class MyComponent extends React.Component {

  render() {

     return (
      <Search section_list={["title", "description"]} 
          highlight_color_text={"black"} 
          highlight_color_bg={"#21ce99"}
          data={JSON}
      />
    );
  }

}
```

## Props

* `section_list`: Array, Required, list of each section you would like to include

* `highlight_color_text`: String, Required, color of the highlight text

* `highlight_color_bg`: String, Required, color of the highlight background

* `data`: Object, Required, json data you want to pass 
