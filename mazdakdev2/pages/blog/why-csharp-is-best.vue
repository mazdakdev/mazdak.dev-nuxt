<template>
    <div class="flex flex-col justify-center px-8 demo1" id="mobile" :class="status_mobile">
        <div class="md:hidden ">
            <div id="burgerBtn" class="mt-6 ml-3" @click="burgerBtn" ></div>
            <ul id="nav" :class="nav_status" class="text-gray-400 text-xl ">
                <NuxtLink to="/"><li class="hover:text-gray-200">Home</li></NuxtLink>
                <a href=""><li class="hover:text-gray-200">Blog</li></a>
                <a href=""><li class="hover:text-gray-200">Snippets</li></a>
                <a href=""><li class="hover:text-gray-200">Projects</li></a>
                <a href=""><li class="hover:text-gray-200">CV</li></a>
            </ul>
        </div>

        <div class="flex  flex-col justify-center md:items-start items-center max-w-2xl border-gray-700 mx-auto pb-16 " id="mobileBodyContent">
            <header>          
                <nav class="py-7 rounded ">
                    <div class="md:container md:flex md:flex-col md:justify-center md:items-start md:mx-auto">
                        <div class="hidden md:flex md:w-auto md:order-1"  id="mobile-menu-4">
                            <ul class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0">
                                <li>
                                    <NuxtLink to="/" class="block py-2 pr-4  text-gray-400  rounded p-0 " aria-current="page">Home</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#" class="block py-2 pr-4  text-gray-200 hover:text-gray-100 rounded p-0">Blog</NuxtLink>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200  rounded p-0">Snippets</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400  hover:text-gray-200 rounded p-0">Projects</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <h1 class="text-white text-5xl mt-16">Why C# Is Best </h1>
            


            <div class="w-full mt-8 prose-dark max-w-none text-white">
                <div class="flex flex-row  mb-8">
                    <img alt="Mazdak Pakaghideh" src="~/assets/images/profile.jpeg" class="rounded-full" loading="lazy" width="24" height="24">
                    <p class="ml-2 text-sm text-gray-300">Mazdak Pakaghideh / Jun 29, 2022</p>
                </div>
                <h1 class="text-2xl mb-8 ">
                    <strong>Why should we Care ?</strong>
                </h1>

                <p class="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit. Eget duis at tellus at urna condimentum mattis. Amet massa vitae tortor condimentum. Suscipit tellus mauris a diam. Odio euismod lacinia at quis risus sed vulputate. Fermentum et sollicitudin ac orci phasellus. Porta non pulvinar neque laoreet suspendisse interdum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
                </p> 
                <p class="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit. Eget duis at tellus at urna condimentum mattis. Amet massa vitae tortor condimentum. Suscipit tellus mauris a diam. Odio euismod lacinia at quis risus sed vulputate. Fermentum et sollicitudin ac orci phasellus. Porta non pulvinar neque laoreet suspendisse interdum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
                </p>    

                <h1 class="text-2xl mb-8 ">
                    <strong>The origin of it  !</strong>
                </h1>
                <p class="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit. Eget duis at tellus at urna condimentum mattis. Amet massa vitae tortor condimentum. Suscipit tellus mauris a diam. Odio euismod lacinia at quis risus sed vulputate. Fermentum et sollicitudin ac orci phasellus. Porta non pulvinar neque laoreet suspendisse interdum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
                </p>    
                <p class="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit. Eget duis at tellus at urna condimentum mattis. Amet massa vitae tortor condimentum. Suscipit tellus mauris a diam. Odio euismod lacinia at quis risus sed vulputate. Fermentum et sollicitudin ac orci phasellus. Porta non pulvinar neque laoreet suspendisse interdum. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
                </p>
               
            </div>

        </div>
        <Footer/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            status_mobile: '',
            nav_status: 'hidden'
        }
    },
    
  
    methods: {
     
        burgerBtn() {
            if (this.status_mobile == '' && this.nav_status == 'hidden') {
                this.status_mobile = 'navigation';
                this.nav_status = '';
            }
            else {
                this.status_mobile = '';
                this.nav_status = 'hidden'
            }
            
        },
    }
})
</script>






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


  #mobileBodyContent {
    position:relative;
    z-index:20;
    width:100%;
    height:100%;
    overflow:hidden;
    visibility:visible;
    @include transition(all 0.3s ease-in);
  }



  #burgerBtn {
    border-top:2px solid #6b7280;
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
      background:#6b7280;
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
      background:#6b7280;
      bottom:0;
      @include transition(all 0.3s ease-in);
    }
  }

  #nav {
    z-index:10;
    list-style-type:none;
    margin:100px 0 0 20px;
    padding:0;
    overflow:hidden;
    li {
      height:30px;
      width:0;
      margin:30px 0;

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



</style>
