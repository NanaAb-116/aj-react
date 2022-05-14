import React from 'react';

function Videos() {
  return (
    <div>
      <section>
        <div id='videos' class='container'>
          <div class='row mx-auto'>
            <div class='col'>
              <h2 class='text-center my-5'>SEASONS</h2>
            </div>
            <div class='embed-responsive embed-responsive-16by9'>
              <iframe
                class='embed-responsive-item pb-5'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/JiHL5Q4Egoc'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div class='col'>
              <h2 class='text-center my-5'>ROUND AND ROUND LYRIC VIDEO</h2>
            </div>
            <div class='embed-responsive embed-responsive-16by9'>
              <iframe
                class='embed-responsive-item pb-5'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/U_bXavZ8urk'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div class='col'>
              <h2 class='text-center my-5'>NEVER QUIT</h2>
            </div>
            <div class='embed-responsive embed-responsive-16by9'>
              <iframe
                class='embed-responsive-item pb-5'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/J3HzFwOdr9M'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>

            <div class='col'>
              <h2 class='text-center my-5'>
                PLAYING AT THE CLIMATE JUSTICE FESTIVAL 2021 IN BERLIN
              </h2>
            </div>
            <div class='embed-responsive embed-responsive-16by9'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/Lle46-WvfSU'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div class='col'>
              <h2 class='text-center my-5'>Nana A.J live at Benefit Concert</h2>
            </div>
            <div class='embed-responsive embed-responsive-16by9'>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/UhjRu8wqEg4'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Videos;
