import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
//import {supabase} from './sb';
//import supabase from './error';

const supabaseUrl:string= process.env.SURL! ||'';
const supabaseKey:string = process.env.SKEY ||'';

const supabase = createClient(supabaseUrl, supabaseKey);


//</error>

const Login = () => {
  const router = useRouter();

  const handleLoginWithGoogle = async () => {
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        const castedError = error as { message?: string };
        console.error('Google authentication error:', castedError.message);
      } else {
        console.log('Google authentication successful!', data);

        // Redirect to the main page after successful authentication
        router.push('/mainpage'); // Adjust the route as needed
      }
    } catch (error: any) {
      console.error('Error during Google authentication:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#000000]">
      <div className="text-white text-center flex items-center">
        <div className="mr-20">
          <Image src="/Rectangle.png" alt="Logo" width={256} height={128} />
        </div>
        <div className="mb-30 text-left">
          <p className="text-4xl font-lucida-calligraphy mb-40">MoodScope</p>
          <form>
            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="bg-[#608DFF] text-white py-5 px-20 rounded-full hover:bg-blue-600 flex items-center text-2xl"
            >
              Login with
              <Image src="/icon _google_.svg" alt="Google icon" width={25} height={25} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
