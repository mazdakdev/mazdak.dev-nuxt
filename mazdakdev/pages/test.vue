<template>

        <header class="section">
            <p>header</p>
        </header>
            <div class=" c1 clearfix">
                <div class="section content">
                    <p>content</p>
                    <div class="row">
                        <div class="box"><p>box1</p></div>
                        <div class="box"><p>box2</p></div>
                        <div class="box"><p>box3</p></div>
                    </div>
                    <div class="">
                        <div class="box"><p>box4</p></div>
                        <div class="box"><p>box5</p></div>
                        <div class="box"><p>box6</p></div>
                    </div>
                </div>
                <div class="section sidebar">
                    <p>sidebar</p>
                    <div class="row">
                        <div class="box"><p>box1</p></div>
                        <div class="box"><p>box2</p></div>
                        <div class="box"><p>box3</p></div>
                        <div class="box"><p>box4</p></div>
                </div>
                </div>
            </div>
            <div class="c1 clearfix">
                <div class="section about">
                    <p>About</p>
                </div>
                <div class="section contact">
                    <p>contact</p>
                    <div class="row">
                        <div class="box"><p>box7</p></div>
                        <div class="box"><p>box8</p></div>
                        <div class="box"><p>box9</p></div>
                    </div>
                </div>         
            </div>
        <footer class="section">
                <p>Footer</p>
        </footer>

</template>

<style scoped>
html {
    font-size: 100%;
}
.section {
    background-color: cadetblue;
    text-align: center;
    padding: 2rem 0rem;
    color: white;
}
header , .c1 {
    margin-bottom: 1.2rem;
}
.content {
    float: left;
    width: calc(66.66% - 1rem);
    margin-right: 1rem;
}
.content .box {
    height: 200px;
    background: #406d6e;
    margin: .5rem;
    float: left;
    width: calc(33.33% - 1rem);
}
.sidebar {
    float: right;
    width: 33.33%;
}
.sidebar .box {
    height: 92px;
    background: #406d6e;
    margin: .5rem;
    float: left;
    width: calc(100% - 1rem);
}
.clearfix:after,
.clearfix:before {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
.contact {
    float: right;
    background-color:#119da1;
    margin-left: .5rem;
    width: calc(66.66% - 1rem)
}
.contact .box {
    height: 100px;
    background: #b4e5e6;
    color: black;
    margin: .5rem;
    float: left;
    width: calc(33.33% - 1rem);
}
.about {
    height: 131px;
    float: left;
    background-color: #75d3d4;
    width: 33.33%;
}
.clearfix:after,
.clearfix:before {
    content: "";
    display: table;
}
.clearfix:after {

    clear:both;}
</style>