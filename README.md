#JS TagHighlighter

Kill your css layout bugs faster.
Placing an Highlighter on every element html can help you figure out the page structure and errors. :D


#Local Development

Download  the css file here   and include it in your html document like so

 <script src="taghighlighter.js"></script>

Adding a file to the head of your html document can kind of be a pain if you are toggling it on and off. You can add taghigHlighter as a sass partial and it will only render out if you set

```javascript
<script src="taghighlighter.js"></script>
```

### Theme Easy
```javascript
taghighlighter.Hlighter("*","easy");
```
The Theme Easy  is the most essential it 's the easiest and limits to highlight yellow the selected tag.


### Theme Random
```javascript
taghighlighter.Hlighter("*","random"); 
```
The Theme Random  chooses a set of colors at random to contour  the selected tag.

### Theme Pesticide
```javascript
taghighlighter.Hlighter("*","pesticide"); 
```
The Theme Random  elates the type of tag with a color to contour  the selected tag.


### Theme Mondrian
```javascript
taghighlighter.Hlighter("*","mondrian");
```
The Theme Mondrian is a tribute to the great Piet Mondrian (Tableau I, 1921).

### Theme White
```javascript
taghighlighter.Hlighter("*","white");
```
The Theme White is a tribute to the great album  White Album (The Beatles )

  


 Grab the source   to use this method or modify it to fit your needs. 
