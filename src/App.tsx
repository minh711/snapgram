import { Routes, Route } from 'react-router-dom';
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, UpdateProfile } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import Authlayout from './_auth/Authlayout';
import RootLayout from './_root/RootLayout';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Saved from './_root/pages/Saved';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<Authlayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>
        
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />  
          <Route path='/explore' element={<Explore />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/all-users' element={<AllUsers />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App