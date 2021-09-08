import { Component, OnInit } from '@angular/core';
import { AzureBlobStorageService } from '../azure-blob-storage.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
import * as $ from 'jquery';
@Component({
  selector: 'app-career-details-page',
  templateUrl: './career-details-page.component.html',
  styleUrls: ['./career-details-page.component.css']
})
export class CareerDetailsPageComponent implements OnInit {
  fileType:File
  jobType:string
  val:number
  fileName:string;
  result:string  = "0" 
  url:string="https://webchat.botframework.com/embed/Azuretechathonbot?s=gMFnpOcSCho.VgTmeiQBQGLl_xJAQ-no-RWNxTKJZ2qNVf6tEFBkkR0&userid=";
  temp:string

  // sas = "sp=racwdl&st=2021-09-03T14:10:45Z&se=2025-09-03T22:10:45Z&sv=2020-08-04&sr=c&sig=0hK9qGH7yFUxOkD1vb0WUP4Q1zgYgDa2FfZ4dYLg%2BUg%3D";
  sas = "?sv=2020-08-04&ss=b&srt=sco&sp=rwdlacx&se=2021-09-22T22:34:13Z&st=2021-09-05T14:34:13Z&spr=https,http&sig=SbNpMj0CG7xE1Gdk9yH5%2FEvpL%2Baqt8rw1VJFr57j7T8%3D"
  constructor(private blobService: AzureBlobStorageService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.jobType=params.get('jobType') //+ string to number
      console.log(this.jobType)
})
  }

  ngOnInit(): void {
    document.getElementById("closeId").style.visibility = "hidden";
    document.getElementsByTagName("iframe")[0].style.visibility = "hidden";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("botHead").style.visibility = "hidden";


    $("#botBtn").click(function(){
      var inpVal = $("#botBtn").val()
      console.log(inpVal)
      if(inpVal == 1)
      {
        document.getElementById("botHead").style.visibility = "visible";

        document.getElementsByTagName("iframe")[0].style.visibility = "visible";
        document.getElementById("closeId").style.visibility = "visible";
        document.getElementById('botBtn').setAttribute("disabled","true");

      }
      else{

      }
})

    $("#closeId").click(function(){
      document.getElementsByTagName("iframe")[0].style.visibility = "hidden";
      document.getElementById("closeId").style.visibility = "hidden";
      document.getElementById("btn1").style.visibility = "visible";
      document.getElementById("botHead").style.visibility = "hidden";


    })


    $(".button1").click(function(){
      document.getElementsByTagName("iframe")[0].style.visibility = "visible";
      document.getElementById("closeId").style.visibility = "visible";
      document.getElementById("btn1").style.visibility = "hidden";
      document.getElementById("botHead").style.visibility = "visible";


    })


    var randomChars = '0123456789';
    for ( var i = 0; i < 4; i++ ) {
        this.result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    this.temp  = this.url+this.result
    var x = document.getElementsByTagName("iframe")[0].setAttribute("src", this.temp);
    this.reloadImages()
  }



  public imageSelected(file: File) {
    this.fileType = file

  }

  buttonClick(){
    if(this.fileType === undefined){
      this.val = 0
      alert("Please Upload resume")
    }
    else{
      console.log()
      this.fileName = this.jobType+"_"+ this.fileType.name
      this.blobService.uploadImage(this.sas, this.fileType, this.fileName, () => {
      this.reloadImages()
      })
      this.val = 1

     
    }

  }


  private reloadImages() {
    // this.blobService.listImages(this.sas).then(list => {
    //   this.picturesList = list
    //   const array = []
    //   this.picturesDownloaded = array

    //   for (let name of this.picturesList) {
    //     this.blobService.downloadImage(this.sas, name, blob => {
    //       var reader = new FileReader();
    //       reader.readAsDataURL(blob);
    //       reader.onloadend = function () {
    //         array.push(reader.result as string)
    //       }
    //     })
    //   }
    // })
  }

}
