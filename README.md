#JS TagHighlighter

Kill your css layout bugs faster.
Placing an Highlighter on every element html can help you figure out the page structure and errors.


#Local Development

Download  the css file here   and include it in your html document like so

 <script src="taghighlighter.js"></script>

Adding a file to the head of your html document can kind of be a pain if you are toggling it on and off. You can add taghigHlighter as a sass partial and it will only render out if you set

```javascript
<script src="taghighlighter.js"></script>
```

```javascript
taghighlighter.Hlighter("*","easy");
```

```javascript
taghighlighter.Hlighter("*","random"); 
taghighlighter.Hlighter("*","pesticide"); 
taghighlighter.Hlighter("*","mondrian");
taghighlighter.Hlighter("*","white");
```


  


 Grab the source   to use this method or modify it to fit your needs. 
