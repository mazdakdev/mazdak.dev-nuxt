<template>
    <div class="flex flex-col justify-center px-8 demo1" id="mobile" :class="status_mobile">
        <div class="md:hidden ">
            <div id="burgerBtn" class="mt-6 ml-3" @click="burgerBtn" ></div>
            <ul id="nav" :class="nav_status" class="text-gray-400 text-xl ">
                <NuxtLink to="/"><li class="hover:text-gray-200">Home</li></NuxtLink>
                <NuxtLink to="/blog"><li class="hover:text-gray-200">Blog</li></NuxtLink>
                <NuxtLink to="/snippets"><li class="hover:text-gray-200">Snippets</li></NuxtLink>
                <a href="https://github.com/mazdakdev"><li class="hover:text-gray-200">Github</li></a>
                <a @click="burgerBtn" href="/#cv"><li class="hover:text-gray-200">CV</li></a>
            </ul>
        </div>

        <div class="flex  flex-col justify-center md:items-start items-start max-w-2xl border-gray-700 mx-auto pb-16 " id="mobileBodyContent">
            <header>          
                <nav class="py-7 rounded ">
                    <div class="md:container md:flex md:flex-col md:justify-center md:items-start md:mx-auto">
                        <div class="hidden md:flex md:w-auto md:order-1"  id="mobile-menu-4">
                            <ul class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0">
                                <li>
                                    <NuxtLink to="/" class="block py-2 pr-4  text-gray-400 hover:text-gray-200  rounded p-0 " aria-current="page">Home</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/blog" class="block py-2 pr-4  text-gray-200 hover:text-gray-100 rounded p-0">Blog</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/snippets" class="block py-2 pr-4  text-gray-400 hover:text-gray-200  rounded p-0">Snippets</NuxtLink>
                                </li>
                                <li>
                                    <a href="https://github.com/mazdakdev" target="_blank" class="block py-2 pr-4  text-gray-400  hover:text-gray-200 rounded p-0">Github</a>
                                </li>
                                <li>
                                    <a href="/#cv" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <h1 class="text-5xl text-white md:mt-8 mt-16 text-center"><strong>Blog</strong></h1>
            <h3 class="text-gray-400 mt-4">A Blog related to anything (Tech and ...)</h3>
            
      
            
            <h2 class="text-4xl text-white mt-8"><strong>All Posts</strong></h2>
            <NuxtLink to="/blog/how-to-use-nmap" class="w-full mt-8">
                <div class="flex flex-col justify-between md:flex-row">
                    <h4 class="w-full mb-2 text-lg font-medium  md:text-xl text-gray-100">
                        How To Use Nmap 
                    </h4>
                </div>
                <p class="text-gray-400">
                  Nmap is a popular open source utility for network discovering and vulnerability scanning. in a basic terms we can use this tool to scan all IP addresses in a network and detect running services. 
                </p>
            </NuxtLink>

      

        </div>
        <Footer/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

    head: {
      title: 'Mazdak Pakaghideh - Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Personal Website of Mazdak Pakaghideh '
        },
        {
          hid: 'subject',
          name: 'subject',
          content: 'Personal Website'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Mazdak,Mazdak Pakaghideh,Pakaghideh,developer,مزدک,مزدک پاک عقیده,پاک عقیده,blog,nmap,scan,system scanning'
        },
        {
          hid: 'copyright',
          name: 'copyright',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'language',
          name: 'language',
          content: 'EN'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index,follow'
        },
        {
          hid: 'author',
          name: 'author',
          content: 'Mazdak Pakaghideh,Mazdak.software@gmail.com'
        },

        {
          hid: 'designer',
          name: 'designer',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'owner',
          name: 'owner',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'owner',
          name: 'owner',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'url',
          name: 'url',
          content: 'https://mazdak.dev'
        },
        {
          hid: 'url',
          name: 'url',
          content: 'https://mazdak.dev'
        },
        
      ],
    },

    data() {
        return {
            status_mobile: '',
            nav_status: 'hidden'
        }
    },

    mounted() {
        window.scrollTo(0,0)
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
