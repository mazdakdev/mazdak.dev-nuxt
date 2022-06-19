<template>
<div class="mobile demo1" :class="status_mobile">
<div id="burgerBtn" @click="burgerBtn" ></div>
  <ul id="nav">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div id="mobileBodyContent">
    <div id="header"></div>
    <div id="image">
      <img src="https://unsplash.com/photos/rAlGkaDAeOo/download?w=640" alt="" />
    </div>
    <div id="title"></div>
    <div id="text">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</div>


</template>

<style lang="scss" scoped>
@mixin transition($params) {
  -webkit-transition: $params;
     -moz-transition: $params;
   -khtml-transition: $params;
       -o-transition: $params;
          transition: $params;
}

@mixin scale($params) {
  -webkit-transform: scale($params);
     -moz-transform: scale($params);
   -khtml-transform: scale($params);
       -o-transform: scale($params);
          transform: scale($params);
}

@mixin box-shadow($params) {
  -webkit-box-shadow:$params;
     -moz-box-shadow:$params;
   -khtml-box-shadow:$params;
       -o-box-shadow:$params;
          box-shadow:$params;
}

@mixin rotate($params) {
  -webkit-transform: rotate($params);
     -moz-transform: rotate($params);
   -khtml-transform: rotate($params);
       -o-transform: rotate($params);
          transform: rotate($params);
}

@mixin opacity($opacity) {
  -webkit-opacity:$opacity;
     -moz-opacity:$opacity;
   -khtml-opacity:$opacity;
       -o-opacity:$opacity;
          opacity:$opacity;
}

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
   -khtml-border-radius: $radius;
       -o-border-radius: $radius;
          border-radius: $radius;
}

body, html {
  margin:0;
  padding:0;
}

body {
  background:#f8f7f5;
  font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color:#888888;
}

#mobile {
  height:667px;
  width:375px;
  background:#c6c4c1;
  position:relative;
  margin:30px auto;
  @include box-shadow(0px 0px 20px 0px rgba(0,0,0,0.1));
  overflow:hidden;
}

#mobileBodyContent {
  background:#f8f7f5;
  position:relative;
  z-index:20;
  width:100%;
  height:100%;
  overflow:hidden;
  visibility:visible;
  @include transition(all 0.3s ease-in);
}

#header {
  height:60px;
  background:#eae8e5;
}

#image {
  height:280px;
  width:100%;
  overflow:hidden;
  position:relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
  }
}

#title {
  height:20px;
  width:200px;
  margin:40px auto;
  background:#eae8e5;
}

#text .item {
  height:10px;
  width:calc(100% - 40px);
  margin:20px auto;
  background:#eae8e5;
}

#burgerBtn {
  border-top:2px solid #f85051;
  height:25px;
  width:30px;
  box-sizing:border-box;
  position:absolute;
  z-index:30;
  left:20px;
  top:15px;
  cursor:pointer;
  @include transition(all 0.3s ease-in);
  &:before {
    content:"";
    display:block;
    position:absolute;
    height:2px;
    width:30px;
    left:0;
    background:#f85051;
    top:10px;
    @include transition(all 0.3s ease-in);
  }
  &:after {
    content:"";
    display:block;
    position:absolute;
    height:2px;
    width:30px;
    left:0;
    background:#f85051;
    bottom:0;
    @include transition(all 0.3s ease-in);
  }
}

#nav {
  position:absolute;
  z-index:10;
  list-style-type:none;
  margin:100px 0 0 20px;
  padding:0;
  overflow:hidden;
  li {
    height:30px;
    width:0;
    margin:30px 0;
    background:#eae8e5;
    @include transition(all 0.6s ease-in);
    & + li {
      margin-left:-40px;
      & + li {
        margin-left:-80px;
        & + li {
          margin-left:-120px;
        }
      }
    }
  }
}

#demoSelector {
  position:absolute;
  list-style-type:none;
  margin:0;
  padding:0;
  top:333px;
  left:50%;
  margin-left:227px;
  li {
    padding:10px 0 10px 30px;
    position:relative;
    cursor:pointer;
    &:after {
      content:"";
      position:absolute;
      height:10px;
      width:10px;
      @include border-radius(5px);
      background:#d8d5d0;
      left:0;
      top:18px;
    }
    &:before {
      content:"";
      position:absolute;
      height:18px;
      width:18px;
      @include border-radius(12px);
      border:2px solid #888888;
      left:-6px;
      top:12px;
      @include scale(0);
      @include transition(all 0.3s ease-in);
    }
    &.active:before { 
      @include scale(1);
    }
  }
}

.navigation {
  #nav li {
    width:200px;
    margin-left:0;
  }
  #burgerBtn {
    border-color:transparent;
    &:before {
      @include rotate(45deg);
      width:33px;
      left:-2px;
    }
    &:after {
      @include rotate(135deg);
      bottom:11px;
      width:33px;
      left:-2px;
    }
  }
}

.demo1.navigation {
  #mobileBodyContent {
    @include scale(0.85);
    margin-left:260px;
  }
}

.demo2.navigation {
  #mobileBodyContent {
    margin-left:320px;
    @include opacity (0.4);
  }
}

.demo3.navigation {
  #mobileBodyContent {
    @include opacity(0);
    @include scale(0.85);
    visibility:hidden;
  }
}

footer {
  position:fixed;
  z-index:1000;
  left:0;
  bottom:0;
  display:block;
  padding:20px;
  box-sizing:border-box;
}

footer a {
  text-decoration:none;
  display:block;
  width:50px;
}

footer a svg {
  width:100%;
  max-width:50px;
  min-width:40px;
  display:inline-block;
}
</style>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

    data() {
        return {
            status_mobile: '',
        }
    },

    methods: {
        burgerBtn() {
            if (this.status_mobile == '') {
                this.status_mobile = 'navigation';
            }
            else {
                this.status_mobile = ''
            }
            
        },

    

  
    }
})
</script>