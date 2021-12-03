
<div id="top"></div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![stars][stars]

A jQuery plugin that adds a rating system to HTML markup compatible with form submission.
The plugin supports different shapes, custom sizes, different shapes and the number of shapes.

Call the plugin on an using the ID property of an element of your choice and you'll have a rating system that's all setup and ready to get submitted with your form!

<p align="right">(<a href="#top">back to top</a>)</p>




### Built With

* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Getting started is easy.
Clone or download the repository and link the plugin script to your project to your project. Call the method on the id of a div element that you want to see the ratings system and your rating system will appear. The element that you call the .rates method on will have an input form appended to it with a class and name with a suffix of 'Rating'. For example, if the method is called on a div with the ID of "score" an <input> element with the id and name of "scoreRating" will be generated that can be used in form submissions.

## A Sample Setup:

This result: <br/>
![image](https://user-images.githubusercontent.com/84114638/144660862-eaac97c5-5fb9-44d3-9a94-a0b65182696e.png)

Produced by this code:

![image](https://user-images.githubusercontent.com/84114638/144646115-f8aeb31e-e0b8-43d1-988d-53cc735a5314.png)

  
See the installation and usage sections for the specific details.

### Installation

1. Download or clone the repo and place the contents, the css, images and js folders in your project root directory. 

**Note: If you need to adjust the images folder location, do step 2. If everything was placed in your root directory, skip to step 3** <br/>

2. If you cannot place the images folder in the root directory due to a limitation of your project, you can adjust the path of the images using the settings of the plugin in the method call. For example, if you have a folder named 'static' in your root directory and your images folder is inside of it in order to indicate the images location you can use the 'imagesFolderLocation' setting and set it to 'static/' like in the following:<br/><br/>
![image](https://user-images.githubusercontent.com/84114638/143951899-1b201535-300d-41e7-9635-bfc23b765175.png)

3. Link jQuery to your html file and add the rates script file to your project as well:<br/><br/>
![scripts](https://user-images.githubusercontent.com/84114638/143790539-3a0ce527-06c4-43d4-9b66-a7b4297a260e.png)
  

4. Link the rates.css file to your html file: <br/><br/>
![image](https://user-images.githubusercontent.com/84114638/143952875-7b9c973f-6584-4214-9abe-ad9ea900facd.png)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

1. After following the installation steps, create an html tag and add an ID to target the element like in the following example: <br/>
![sample1](https://user-images.githubusercontent.com/84114638/143790472-ea4792e9-841a-4a3f-9bbd-4d5c08fb0d43.png)
2. In the scripts tag of your html file or the external .js script file, call the .rates method on the element where you want to generate the rating system.<br/>
![image](https://user-images.githubusercontent.com/84114638/144662075-3c5a084d-d09c-4a94-8b9d-aa349bd35569.png)
3. If no settings are given then a set of five 25 pixel-sized white stars that turn yellow when hovered over like the following: <br/>
![image](https://user-images.githubusercontent.com/84114638/144529308-72ef2578-e066-4320-9d11-69ebf0e534d1.png)
4. Clicking on a star will set the rating to the corresponding star. 
5. The settings can be edited like the following: shadeColor can be set as either 'red' or 'yellow' to set the fill-in color, starCount can be set as an integer and sets how many shapes are to appear. The shape can be set as 'black-star', 'white-star', 'black-heart', and 'white-heart' and alters the shapes of the rating. <br/>
![settings1](https://user-images.githubusercontent.com/84114638/143791415-69a6719a-dff6-48a2-a899-7d419d0a76e2.png) <br/>
6. For example the above settings will create a set that looks like the following: <br/>
![results1](https://user-images.githubusercontent.com/84114638/143791161-3d70c598-0960-4abc-a1b5-a01aeafca9b6.png)

7. Note: For the purposes of form submission an input tag will be dynamically created in your HTML file of this structure: <br/>
`<input type="hidden" id = "${$containerName}Rating" name="${$containerName}Rating" value="0" >`

The id and container name are based on the id of the element you targeting with the plugin. So, for our example (id = ratestars) the id and name of our input element will be ratestarsRating.

## Customizable settings list
Customizable optional settings
<pre>
shadeColor
  Adjusts the filling color, for different options are provided as follows.
  
    Options:
      "rates-green"
      "rates-blue"
      "rates-yellow"
      "rates-red"
      
shapeHeight:
  Adjust the size of the shape by changing its height
    Enter any string value that indicates the pixel size.
    
      Example options:
        "25px"
        "55px"
        "75px"
  
shapeCount: 
  Adjusts many items(stars or hearts) are part of the rating system
    Enter an integer appropriate for your project.
    
      Example options:
        3
        5
        10
       
       
imagesFolderLocation:
  Adds a prefix to the path of default images folder which should be in your root directory, only 
  necessary for pathing conflicts or issues.
  
  For example, the default relative path for the white-star image is "images/white-star.png"
  If you need to adjust the default path to indicate it is nested deeper in your project you 
  indicate with this setting.If you want to indicate the images folder is nested in a folder 
  named static use "static/" as the setting, this would set the path as "static/images/white-star.png"
  
    Example options:
      "static/"
      "styles/"
     
  

If no value is entered, results produce a default of:

shadeColor: 'rates-yellow',
shapeHeight: '25px',
shapeCount: 5,
shape: 'white-star',
imagesFolderLocation: '',

</pre>


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[stars]: https://user-images.githubusercontent.com/84114638/143788850-11921f98-c9a7-445a-a6b7-0c1bd0e18ad0.png




