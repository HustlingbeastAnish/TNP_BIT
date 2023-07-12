import React from "react";
import BottomDrawer from "../../BottomDrawer/BottomDrawer";
import StudentNavbar from "../../StudentNavbar/StudentNavbar";

const AddAcdemics = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Fill Out your Class 10 Details
              </h3>
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--emojione"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M33 11.8c0 .5-.5 1-1 1s-1-.5-1-1V1c0-.6.5-1 1-1s1 .4 1 1v10.8"
                    fill="#b2c1c0"
                  >
                    {" "}
                  </path>{" "}
                  <path fill="#e5dec1" d="M4 28h56v32H4z">
                    {" "}
                  </path>{" "}
                  <path
                    d="M60.5 19.8c-.5-1-1.8-1.8-3-1.8H6.4c-1.1 0-2.5.8-3 1.8L.1 26.2c-.5 1 0 1.8 1.1 1.8h61.4c1.1 0 1.6-.8 1.1-1.8l-3.2-6.4"
                    fill="#d33b23"
                  >
                    {" "}
                  </path>{" "}
                  <g fill="#d6eef0">
                    {" "}
                    <path d="M15 45c0 .5-.4 1-1 1H8c-.6 0-1-.5-1-1v-4c0-.5.4-1 1-1h6c.6 0 1 .5 1 1v4">
                      {" "}
                    </path>{" "}
                    <path d="M15 35c0 .5-.4 1-1 1H8c-.6 0-1-.5-1-1v-4c0-.5.4-1 1-1h6c.6 0 1 .5 1 1v4">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                  <g fill="#dbb471">
                    {" "}
                    <path d="M14 36.5H8c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5m-6-6c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5H8">
                      {" "}
                    </path>{" "}
                    <path d="M10.5 30h1v6h-1z"> </path>{" "}
                    <path d="M14 47H8c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5m-6-6c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5H8">
                      {" "}
                    </path>{" "}
                    <path d="M10.5 40.5h1v6h-1z"> </path>{" "}
                  </g>{" "}
                  <path
                    d="M15 55c0 .5-.4 1-1 1H8c-.6 0-1-.5-1-1v-4c0-.5.4-1 1-1h6c.6 0 1 .5 1 1v4"
                    fill="#d6eef0"
                  >
                    {" "}
                  </path>{" "}
                  <g fill="#dbb471">
                    {" "}
                    <path d="M14 57H8c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5m-6-6c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5H8">
                      {" "}
                    </path>{" "}
                    <path d="M10.5 50.5h1v6h-1z"> </path>{" "}
                  </g>{" "}
                  <g fill="#d6eef0">
                    {" "}
                    <path d="M57 45c0 .5-.5 1-1 1h-6c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h6c.5 0 1 .5 1 1v4">
                      {" "}
                    </path>{" "}
                    <path d="M57 35c0 .5-.5 1-1 1h-6c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h6c.5 0 1 .5 1 1v4">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                  <g fill="#dbb471">
                    {" "}
                    <path d="M56 36.5h-6c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5m-6-6c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-6">
                      {" "}
                    </path>{" "}
                    <path d="M52.5 30h1v6h-1z"> </path>{" "}
                    <path d="M56 47h-6c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5m-6-6c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-6">
                      {" "}
                    </path>{" "}
                    <path d="M52.5 40.5h1v6h-1z"> </path>{" "}
                  </g>{" "}
                  <path
                    d="M57 55c0 .5-.5 1-1 1h-6c-.5 0-1-.5-1-1v-4c0-.5.5-1 1-1h6c.5 0 1 .5 1 1v4"
                    fill="#d6eef0"
                  >
                    {" "}
                  </path>{" "}
                  <g fill="#dbb471">
                    {" "}
                    <path d="M56 57h-6c-.8 0-1.5-.7-1.5-1.5v-4c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v4c0 .8-.7 1.5-1.5 1.5m-6-6c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-6">
                      {" "}
                    </path>{" "}
                    <path d="M52.5 50.5h1v6h-1z"> </path>{" "}
                  </g>{" "}
                  <path
                    d="M32.8 11.6c-.4-.3-1.1-.3-1.6 0L11.8 27.4c-.4.3-.4.6.2.6h40c.5 0 .7-.3.2-.6L32.8 11.6"
                    fill="#f15744"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M48.2 27.4L32.8 14.6c-.4-.4-1.1-.4-1.5 0L15.8 27.4c-.5.3-.4.6.2.6h2v32h28V28h2c.5 0 .7-.3.2-.6"
                    fill="#f9f3d9"
                  >
                    {" "}
                  </path>{" "}
                  <path fill="#e5dec1" d="M24 45h16v15H24z">
                    {" "}
                  </path>{" "}
                  <path fill="#42ade2" d="M26 45h12v15H26z">
                    {" "}
                  </path>{" "}
                  <g fill="#89664c">
                    {" "}
                    <path d="M20.2 38c.3.1.7.2 1.1.2c.5 0 .7-.2.7-.4s-.2-.4-.7-.5c-.7-.2-1.2-.6-1.2-1.1c0-.7.6-1.2 1.7-1.2c.5 0 .9.1 1.1.2l-.2.7c-.2-.1-.5-.2-.9-.2s-.6.2-.6.4s.2.4.8.5c.8.3 1.1.6 1.1 1.2s-.6 1.2-1.8 1.2c-.5 0-1-.1-1.2-.2l.1-.8">
                      {" "}
                    </path>{" "}
                    <path d="M26.9 38.8c-.2.1-.6.2-1.1.2c-1.5 0-2.3-.8-2.3-1.9c0-1.3 1.1-2.1 2.4-2.1c.5 0 .9.1 1.1.2l-.2.7c-.2-.1-.5-.1-.8-.1c-.8 0-1.4.4-1.4 1.3c0 .8.5 1.3 1.4 1.3c.3 0 .6-.1.8-.1l.1.5">
                      {" "}
                    </path>{" "}
                    <path d="M28.5 35.1v1.5h1.6v-1.5h1V39h-1v-1.6h-1.6V39h-1v-3.9h1">
                      {" "}
                    </path>{" "}
                    <path d="M36 37c0 1.3-.9 2-2.1 2c-1.3 0-2.1-.9-2.1-2c0-1.2.8-2 2.1-2s2.1.9 2.1 2m-3.2 0c0 .8.4 1.3 1.1 1.3c.7 0 1-.6 1-1.3c0-.7-.4-1.3-1.1-1.3c-.6 0-1 .6-1 1.3">
                      {" "}
                    </path>{" "}
                    <path d="M40.6 37c0 1.3-.9 2-2.1 2c-1.3 0-2.1-.9-2.1-2c0-1.2.8-2 2.1-2c1.4 0 2.1.9 2.1 2m-3.1 0c0 .8.4 1.3 1.1 1.3c.7 0 1-.6 1-1.3c0-.7-.4-1.3-1.1-1.3c-.6 0-1 .6-1 1.3">
                      {" "}
                    </path>{" "}
                    <path d="M41.3 35.1h1v3.1H44v.7h-2.7v-3.8"> </path>{" "}
                  </g>{" "}
                  <circle cx="32" cy="26" r="7" fill="#dbb471">
                    {" "}
                  </circle>{" "}
                  <circle cx="32" cy="26" r="5" fill="#ffffff">
                    {" "}
                  </circle>{" "}
                  <path fill="#e5dec1" d="M31.5 45h1v15h-1z">
                    {" "}
                  </path>{" "}
                  <path
                    d="M32 22c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1s1-.5 1-1v-4c0-.5-.5-1-1-1"
                    fill="#b2c1c0"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M32 26h-2c-.5 0-1 .5-1 1s.5 1 1 1h2c.5 0 1-.5 1-1s-.5-1-1-1"
                    fill="#f15744"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M33 2v7.4c4 3.2 8-6.9 12-3.7C41 0 37 7.6 33 2z"
                    fill="#b4d7ee"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M32.9 40.3c-.5-.4-1.4-.4-1.9 0c-2.1 1.5-9 5.7-9 5.7v2h20v-2s-6.9-4.2-9.1-5.7"
                    fill="#f15744"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M63 60H1c-.6 0-1 .5-1 1v2c0 .5.4 1 1 1h62c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1"
                    fill="#666"
                  >
                    {" "}
                  </path>{" "}
                  <path fill="#e8e8e8" d="M20 62h24v2H20z">
                    {" "}
                  </path>{" "}
                  <path fill="#d0d0d0" d="M22 60h20v2H22z">
                    {" "}
                  </path>{" "}
                  <g fill="#666">
                    {" "}
                    <path d="M29.1 53.5h1.4v.7h-1.4z"> </path>{" "}
                    <path d="M33.5 53.5h1.4v.7h-1.4z"> </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img
                class="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p class="my-4">
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img
                class="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
};

export default AddAcdemics;
