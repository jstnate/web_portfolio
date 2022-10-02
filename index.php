<?php 
    $pageTitle = "Nathan LEFETEY - Portfolio";
    require "doctype_template.php"
?>

<body>
    <?php require "header_template.php" ?>

    <main>
        <a href="#first_section" class="go_up_button">
            <i class="fa-solid fa-angles-up fa-2x"></i>
        </a>

        <section id="first_section " class="welcome_section">
            <div>
                <img src="images/pdp/logo_nate_grd.png" alt="">

                <div class="welcome_text">
                    <h1 class="name_title">Nathan LEFETEY</h1>
                    <h2 class="job_title">Front-end Developper</h2>
                </div>
            </div>
        </section>

        <section class="pres_section">
            <div class="pres_content">
                <div class="title">
                    <h1 class="big_title">
                        about me
                    </h1>
                    <h2 class="lil_tilte">
                        who am i ?
                    </h2>
                </div>
                <div class="pres">
                    <img src="images/pdp/nathan_lefetey.jpg" alt="">

                    <div class="text">
                        <h3>Hello,</h3>
                        <p>
                            I am <strong>Nathan LEFETEY</strong>, Web & Mobile Developer, passionate about new technologies and their ability 
                            to improve and facilitate business productivity.
                        </p>
                        <p>
                            Currently in my 2nd year of coding and digital innovation at IIM, 
                            I am constantly looking for new technologies and experiences.
                        </p>

                        <a href="docs/cv-nathan-lefetey.pdf" download="cv-nathan-lefetey.pdf">
                            <i class="fa-solid fa-download"></i>
                            <strong>
                                Download my CV
                            </strong>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
</body>
</html>