# Bootstrap .no-gutters Example, no container

Used the scss to write the css.

### Installing
A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Npm install - to install the grunt package
```

run the grunt commands like 
```
grunt sass  - to compile the scss
```



### Example with single border

HTML Code

```
<div class="row no-gutters">
      <div class="col-sm-3 "> your content </div>
</div>
```

SCSS Code

```
.row.no-gutters {
  margin-right: 0;
  margin-left: 0;

  & > [class^="col-"],
  & > [class*=" col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

```


## Deployment

Add additional notes about how to deploy this on a live system

## Depandance 

* [ Bootstrap Framework ](https://getbootstrap.com) - Bootstrap
* [ jQuery plugin ](https://jquery.com) - jQuery Plugin 
