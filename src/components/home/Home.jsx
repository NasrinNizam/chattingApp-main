import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { userData } from '../../slices/UserSlice';
import { FaRegPenToSquare } from "react-icons/fa6";
import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { MdCancelPresentation, MdSave  } from "react-icons/md";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { getAuth, onAuthStateChanged, updateProfile  } from "firebase/auth";
export const Home = () => {
  // ========= react variables part
  const [show, setShow ]=useState(false)
  // ========== slice part
  const currentUserData =useSelector((state)=>state.counter.value)
  // ========= firebase variables part
  const storage = getStorage();
  const auth = getAuth();
  // ========= react cropper variables part
  const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  // ====== cropper function part
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result );
    };
    reader.readAsDataURL(files[0]);
  };  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  // =========== functions
  const handleSave=()=>{
    const storageRef = ref(storage, 'userPhoto' + currentUserData.uid + '.png')
      uploadString(storageRef, cropData, 'data_url').then((snapshot) => {
        getDownloadURL(storageRef)
        .then((url)=>{
          onAuthStateChanged(auth, (user) => {
            updateProfile(auth.currentUser, {
              photoURL: url
            })
            .then(()=>{
              location.reload()
            })
          });
        })
      console.log('Uploaded a data_url string!');
     });
  }





  // ======== console part
  console.log(cropData)
  return (
    <>
    <section className=' relative w-full h-screen flex justify-center items-center'>
    <div className="max-w-sm mx-auto bg-[#074173] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="h-40">
        <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x400.png?text=Cover+Photo" alt="Cover" />
      </div>
      <div  onClick={()=>setShow(true)} className="flex justify-center relative">
        <img className="w-32 h-32 object-cover rounded-full border-4 border-white transform transition duration-500 hover:scale-110" src={currentUserData?.photoURL} alt="Profile"/>
        <div className="absolute right-[35%] bottom-0 text-white text-xl bg-[#074173] p-2 rounded-full "><FaRegPenToSquare  /></div>
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl text-white leading-7 tracking-wider font-extrabold font-sevillana">{currentUserData?.displayName} </h2>
        <h2 className="text-lg text-white font-poppins font-medium"></h2>
        <div className="flex justify-center items-center text-black mt-1">
          <FaEnvelope className="mr-2 text-white" />
          <p className="text-white font-poppins">{currentUserData?.email} </p>
        </div>
        <div className="flex justify-center items-center text-black">
          <FaPhone className="mr-2 text-white" />
          <p className="text-white font-poppins">(+880) 01706226996 </p>
        </div>
      </div>
    </div>
    {
      show &&
    <div className="absolute top-0 right-[50%] translate-x-[50%] bg-black bg-opacity-50 w-[800px] h-screen flex justify-center items-start">
    <div className='bg-white p-5'>
      <div className="flex justify-between items-center">
        <button onClick={handleSave} className='text-3xl text-[#074173] active:scale-110'><MdSave /></button>
        <button onClick={()=>setShow(false)} className='text-3xl text-[#074173] active:scale-110'><MdCancelPresentation /></button>
      </div>
      <div style={{ width: "100%" }}>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        <Cropper
          ref={cropperRef}
          style={{ height: 300, width: "400px" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
      </div>
      <div>
        <div
          className="box"
          style={{ width: "100%", float: "right" }}
        >
          <h1>
            <span>Crop</span>
            <button style={{ float: "right" }} onClick={getCropData} >
              Crop Image
            </button>
          </h1>
          <img style={{ width: "100px" }} src={cropData} alt="cropped" />
        </div>
      </div>
      <br style={{ clear: "both" }} />
    </div>
    </div>
    }
    </section>
    </>
  )
}
