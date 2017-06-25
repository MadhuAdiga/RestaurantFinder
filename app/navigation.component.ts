import { Component } from '@angular/core';

@Component({
  selector: 'madhu',
  template: ` <nav class="navbar navbar-inverse navbar-fixed-top">  <!-- Bootstrap inverse navigation bar -->
        <div class="container-fluid">
            <div class="navbar-header"><a class="navbar-brand navbar-link" href="index.html"><strong>Restaurant Finder</strong></a>
                <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> 
            </div>
            <div class="collapse navbar-collapse" id="navcol-1"> <!-- Navigation bar to navigate between 3 html pages through the navigation bar -->
                <ul class="nav navbar-nav navbar-right">
                    <li> <h6 style="color:white; padding-top:15px; margin-right:15px">Find the best restaurants in Bangalore!</h6> </li>
                </ul>
            </div>
        </div>
    </nav>  
    `
})


export class navigationComponent{
     user =  {
        fullName: 'Madhushri Adiga',
        firstName: 'Madhushri'
    }
};
