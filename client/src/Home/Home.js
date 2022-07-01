import React, { useState } from 'react'
import Header from '../Header/Header'
import CommentIcon from '@mui/icons-material/Comment';
import Blog from '../blogger-logo-icon-png-10157.png'
import Chat from '../facebook-messenger-logo-png-44109.png'
import Vid from '../video-icon-8038.png'
import Cam from '../cam.svg'
import ShareIcon from '@mui/icons-material/Share';
import Audio from '../sound-png-35796.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import './Home.css'
export default function Home() {
  const[video,setVideo]=useState(null)
  const Uploadvideo=()=>{
    

  }
  return (
    <div>
        <Header />
        
       <div style={{marginLeft:"30%",marginTop:"30px",backgroundColor:"lightgray",width:"500px",height:"150px",borderRadius:"10px",boxShadow:"inherit"}}>
       <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

             <div class="item" style={{cursor:"pointer"}}>
              <img src={Cam} alt='cam' style={{marginLeft:"20px",width:"80px",color:'white',marginRight:"10px",marginTop:"30px",height:"80px"}} />
              <span style={{marginLeft:"20px",marginRight:"13px"}} class="caption">Camera</span>
             </div>
             <div class="item" style={{cursor:"pointer"}}>
                   <img src={Vid} alt='video' style={{color:'white',height:"80px",marginRight:"10px",width:"80px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} class="caption">Videos</span>
              </div>
              <div class="item" style={{cursor:"pointer"}}>
                   <img src={Audio} alt='video' style={{color:'white',height:"70px",width:"70px",marginRight:"",marginTop:"30px"}} />
                   <span style={{marginRight:"",marginTop:"9px"}} class="caption">Audio</span>
              </div>
              <div class="item" style={{cursor:"pointer"}}>
                   <img src={Blog} alt='video' style={{color:'white',height:"85px",width:"100px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} class="caption">Blog</span>
                 </div>
                   <div class="item" style={{cursor:"pointer"}}>
                   <img src={Chat} alt='video' style={{color:'white',height:"80px",width:"90px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} class="caption">Chat</span>
                </div>
              </div>
         

       </div>
       <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
         <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
       <div style={{marginTop:"30px",backgroundColor:"lightgray",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit"}}>
         <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"lightgray",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <img src='https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg' style={{minWidth:"500px",minHeight:"300px"}} alt='new' />
          <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#Home</p>
          </div>
     {/*      <div style={{backgroundColor:"lightgray",marginTop:"30px",marginLeft:"120px",height:"400px",borderRadius:"12px",width:"300px"}}>
            <p>haef</p>
          </div> */}
          </div>



          <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"lightgray",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"lightgray",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <ReactPlayer url='https://karthiknbucket1.s3.ap-southeast-1.amazonaws.com/uploads/93d0aeef-addb-4d1f-b41a-04112812495f-Java+for+the+Haters+in+100+Seconds.mp4' controls width='500px'  alt='new' />
          <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#React #Learning</p>
          </div>
          </div>

          <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"lightgray",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"lightgray",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <div style={{marginLeft:"10px",backgroundColor:"white",width:"480px",borderRadius:"12px",marginRight:"20px"}}>
            <p style={{marginLeft:"10px"}}>Hello all, this is iDiscovers blog posting page where we can post whatever we thought that is useful to the society </p>
            </div>
          <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#Blog #Post</p>
          </div>
        </div>
        <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img title="karthi" src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png' style={{marginTop:"20px",marginRight:"10px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"lightgray",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"lightgray",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <p style={{marginLeft:"20px"}}>Demo Podcast</p>
          <ReactAudioPlayer src='https://dcs.megaphone.fm/LEW2005029794.mp3'
  controls style={{marginLeft:"20px",width:"450px",marginRight:"20px"}} />
          <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px",marginBottom:"10px"}}>#Podcast #Learning</p>
          </div>
          </div>
{/*           <iframe src='https://karthiknbucket1.s3.ap-southeast-1.amazonaws.com/Java+for+the+Haters+in+100+Seconds.mp4' width='300' height='300' title='vid'></iframe> */}
          
          
    </div>
  )
}
