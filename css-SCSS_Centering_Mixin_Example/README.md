# Centering Mixin
Vertical & Horizontal Alignment SASS Mixin.
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



### Example 

HTML Code for Centering both axis

```
<div class="parent">  
	<div class="child center">I'm centered on both axis!</div>
	</div>
```

HTML Code for Centering  horizontally

```
<div class="parent">  
	<div class="child horizontal">I'm centered horizontally!</div>
```

HTML Code for Centering  vertically

```
<div class="parent"> 
	<div class="child vertical">I'm centered vertically!</div>
		
	</div>
```

SCSS Mixin Code

```
@mixin center($horizontal: true, $vertical: true) {
  position: absolute;

  @if ($horizontal and $vertical) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  } @else if ($horizontal) {
    left: 50%;
    transform: translate(-50%, 0);

  } @else if ($vertical) {
    top: 50%;
    transform: translate(0, -50%);
  }
}

```
SCSS Code

```

.parent {
  position: relative;
  background: #f06d06;
  width: 50%;
  height: 200px;
  margin: 20px auto;
}

.child {
  background: white;
  padding: 20px;

  &.center {
    @include center;
  }

  &.horizontal {
    @include center(true, false);
  }

  &.vertical {
    @include center(false, true);
  }
}

body {
  background: papayawhip;
}

```


## Deployment

Add additional notes about how to deploy this on a live system

## Depandance 


