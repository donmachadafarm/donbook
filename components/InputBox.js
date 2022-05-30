import Image from "next/image"
import {useSession} from "next-auth/react"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon,VideoCameraIcon} from "@heroicons/react/solid"
import { useRef } from "react"
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase'
import { serverTimestamp } from "firebase/firestore";


function InputBox() {
    const {data: session,status} = useSession()
    const inputRef = useRef(null)

    const sendPost = async (e) => {
        e.preventDefault()

        if(!inputRef.current.value) return

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                timestamp: serverTimestamp()
            });
            console.log("Post added with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
          inputRef.current.value = ''
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            {/* top half */}
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="user image"
                />
                <form className="flex flex-1">
                    <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind, ${session.user.name}?`} />
                    <button hidden onClick={sendPost} type='submit'>Submit</button>
                </form>
            </div>
            {/* second half */}
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox