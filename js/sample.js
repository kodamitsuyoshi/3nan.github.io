// Generated// Generated by CoffeeScript 1.7.1


  javascriptに記述されるコメントの記述方法

var hello, sayHourlyHelloTo, sum, voidMethod;
  関数定義

  hello = ->
  console.log 'hello'



hello = function() {
    return console.log('hello');
};



  引数有
  sum = (a,b)->
  a+b


sum = function(a, b) {
    return a + b;
};



  値を返さない関数の定義
  voidMethod =  ->
  a=1
  b=2
  c = a+b
  return


voidMethod = function() {
    var a, b, c;
    a = 1;
    b = 2;
    c = a + b;
};



  引数にデフォルト値をつける
  sayHourlyHelloTo = (name , hour=8) ->
  #["]で文字列を生成する場合「#{value}」と記述すれば変数を展開でき
  greetingMessage  ='こんばんわ。'
  if hour > 3
  greetingMessage  ='おはようございます。'
  else if hour > 12
  greetingMessage  ='こんにちわ。'
  console.log "#{greeting} どうも#{name}さん"
  return


sayHourlyHelloTo = function(name, hour) {
    var greetingMessage;
    if (hour == null) {
        hour = 8;
    }
    greetingMessage = 'こんばんわ。';
    if (hour > 3) {
        greetingMessage = 'おはようございます。';
    } else if (hour > 12) {
        greetingMessage = 'こんにちわ。';
    }
    console.log("" + greeting + " どうも" + name + "さん");
};
 by CoffeeScript 1.7.1


  javascriptに記述されるコメントの記述方法

var hello, sayHourlyHelloTo, sum, voidMethod;
  関数定義

  hello = ->
  console.log 'hello'



hello = function() {
    return console.log('hello');
};



  引数有
  sum = (a,b)->
  a+b


sum = function(a, b) {
    return a + b;
};



  値を返さない関数の定義
  voidMethod =  ->
  a=1
  b=2
  c = a+b
  return


voidMethod = function() {
    var a, b, c;
    a = 1;
    b = 2;
    c = a + b;
};



  引数にデフォルト値をつける
  sayHourlyHelloTo = (name , hour=8) ->
  #["]で文字列を生成する場合「#{value}」と記述すれば変数を展開でき
  greetingMessage  ='こんばんわ。'
  if hour > 3
  greetingMessage  ='おはようございます。'
  else if hour > 12
  greetingMessage  ='こんにちわ。'
  console.log "#{greeting} どうも#{name}さん"
  return


sayHourlyHelloTo = function(name, hour) {
    var greetingMessage;
    if (hour == null) {
        hour = 8;
    }
    greetingMessage = 'こんばんわ。';
    if (hour > 3) {
        greetingMessage = 'おはようございます。';
    } else if (hour > 12) {
        greetingMessage = 'こんにちわ。';
    }
    console.log("" + greeting + " どうも" + name + "さん");
};