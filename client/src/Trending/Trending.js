import React from 'react'
import Header from '../Header/Header'
import CommentIcon from '@mui/icons-material/Comment';
import ReactPlayer from 'react-player';
import ShareIcon from '@mui/icons-material/Share';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
export default function Trending() {
  return (
    <div>
        <Header />
   
        <div style={{width:"60%",backgroundColor:"lightgray",height:"50px",marginLeft:"5%",marginTop:"3%",display:"flex"}}>

            <h3 style={{marginRight:"20px",marginTop:"10px",marginLeft:"10px"}}>Trending</h3>
          {/*   <h3 style={{marginRight:"20px",marginTop:"10px"}}>For You</h3> */}
        </div>

        <div style={{display:"flex"}}>
            <div style={{width:"150px",marginTop:"30px",height:"100px",backgroundColor:"lightgray",marginLeft:"5%",borderRadius:"12px"}}>
            <p style={{marginLeft:"10px"}}>#Programming</p>
            <button style={{backgroundColor:"lightblue",borderRadius:"12px",marginLeft:"40px"}}>Follow</button>
            </div>
            <div style={{width:"150px",marginTop:"30px",height:"100px",backgroundColor:"lightgray",marginLeft:"4%",borderRadius:"12px"}}>
            <p style={{marginLeft:"10px"}}>#Testing</p>
            <button style={{backgroundColor:"lightblue",borderRadius:"12px",marginLeft:"40px"}}>Follow</button>
            </div>
            <div style={{width:"150px",marginTop:"30px",height:"100px",backgroundColor:"lightgray",marginLeft:"4%",borderRadius:"12px"}}>
            <p style={{marginLeft:"10px"}}>#Automation</p>
            <button style={{backgroundColor:"lightblue",borderRadius:"12px",marginLeft:"40px"}}>Follow</button>
            </div>
            <div style={{width:"150px",marginTop:"30px",height:"100px",backgroundColor:"lightgray",marginLeft:"4%",borderRadius:"12px"}}>
            <p style={{marginLeft:"10px"}}>#MachineLearning</p>
            <button style={{backgroundColor:"lightblue",borderRadius:"12px",marginLeft:"40px"}}>Follow</button>
            </div>
            <div style={{width:"150px",marginTop:"30px",height:"100px",backgroundColor:"lightgray",marginLeft:"4%",borderRadius:"12px"}}>
            <p style={{marginLeft:"10px"}}>#ComputerVision</p>
            <button style={{backgroundColor:"lightblue",borderRadius:"12px",marginLeft:"40px"}}>Follow</button>
            </div>
            <div style={{width:"300px",marginTop:"30px",height:"110px",backgroundColor:"lightgray",marginLeft:"8%",borderRadius:"12px"}}>
            <p style={{marginLeft:"20px"}}> Checkout This Blogs</p>
            <p style={{marginLeft:"20px"}}> React Turorial <span style={{float:"right",color:"blue",marginRight:"20px"}}> Follow</span></p>
            <p style={{marginLeft:"20px"}}> MERN Turorial <span style={{float:"right",color:"blue",marginRight:"20px"}}> Follow</span></p>
            </div>

        </div>
        <div style={{marginLeft:"5%",marginTop:"30px",width:"100%",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>

       <div style={{marginTop:"30px",backgroundColor:"lightgray",width:"500px",height:"400px",borderRadius:"10px",boxShadow:"inherit"}}>
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
          <div style={{width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginLeft:"20px"}}>
          <div style={{marginTop:"30px",backgroundColor:"lightgray",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>Karthi <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"lightgray",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          
          </div>
          <ReactPlayer url='https://www.youtube.com/watch?v=Tn6-PIqc4UM' width='500px' style={{Width:"500px",minHeight:"300px"}} alt='new' />
          <div style={{height:"30px",backgroundColor:"lightgray",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>#React #Learning</p>
          </div>
          </div>
          </div>
      


    </div>
  )
}
