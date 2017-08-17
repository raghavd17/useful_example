# Create Headings with Lines in CSS

A popular web design pattern is to include horizontal lines on either side of a line of text, often in a heading.
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



### Example 1

HTML COde

```
<h1>Heading with single border</h1>
```
SCSS COde

```
h1 {
    overflow: hidden;
    text-align: center;
		font-size:22px;
		font-family:helvetica;
		font-weight:normal;
			&:before, &:after {
				background-color: #f00;
				content: "";
				display: inline-block;
				height: .6px;
				position: relative;
				vertical-align: middle;
				width: 50%;
			}
			&:before {
				right: 15px;
				margin-left: -50%;
			}
			&:after {
					left: 15px;
					margin-right: -50%;
			}
}


// double border 
h1 {
	&.double-border{
		font-size:30px;
		&:before, &:after {
				background-color: transparent;
			// background:yellow;
				content: "";
				display: inline-block;
				height: 5px;
				position: relative;
				vertical-align: middle;
				width: 50%;
				border-top:1px solid red;
				border-bottom:1px solid red;
			}
	}
}

```
### Example 2

HTML COde

```
<h1 class="double-border">Heading wth double border</h1>
```
SCSS COde

```
h1 {
    overflow: hidden;
    text-align: center;
		font-size:22px;
		font-family:helvetica;
		font-weight:normal;
			&:before, &:after {
				background-color: #f00;
				content: "";
				display: inline-block;
				height: .6px;
				position: relative;
				vertical-align: middle;
				width: 50%;
			}
			&:before {
				right: 15px;
				margin-left: -50%;
			}
			&:after {
					left: 15px;
					margin-right: -50%;
			}
}


// double border 
h1 {
	&.double-border{
		font-size:30px;
		&:before, &:after {
				background-color: transparent;
			// background:yellow;
				content: "";
				display: inline-block;
				height: 5px;
				position: relative;
				vertical-align: middle;
				width: 50%;
				border-top:1px solid red;
				border-bottom:1px solid red;
			}
	}
}

```

## Deployment

Add additional notes about how to deploy this on a live system

## Depandance 

* 
