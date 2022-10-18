<?php 
    $pageTitle = "Nathan LEFETEY - Portfolio";
    require_once "templates/doctype.php"
?>

<body>
    <?php require_once "templates/header.php" ?>

    <main>
        <a href="#first_section" class="go_up_button" title="Go on the top">
            <i class="fa-solid fa-angles-up fa-2x"></i>
        </a>

        <section id="first_section" class="welcome_section">
            <div>
                <img src="images/pdp/logo_nate_grd.png" alt="">

                <div class="welcome_text">
                    <h1 class="name_title">Nathan <span>LEFETEY</span></h1>
                    <hr>
                    <h2 class="job_title">Full-stack Developper</h2>
                </div>
            </div>
        </section>

        <section class="pres_section" id="about">
            <div class="pres_content">
                <div class="title">
                    <h1>
                        about me
                    </h1>
                    <h2>
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

        <section class="skills_section" id="skills">
            <div class="skills_content">
                <div class="title">
                    <h1>my skills</h1>
                    <h2>What i can do ?</h2>
                </div>

                <div class="skill">
                    <div class="front category">
                        <h3>Frontend</h3>
                        <img src="images/logos/logo_html.png" alt="" class="icon-grid1-1">
                        <img src="images/logos/logo_css.png" alt="" class="icon-grid1-2">
                        <img src="images/logos/logo_js.png" alt="" class="icon-grid1-3">
                    </div>

                    <div class="back category">
                        <h3>Backend</h3>
                        <img src="images/logos/logo_php.png" alt="" class="icon-grid2-1">
                        <img src="images/logos/logo_mysql.png" alt="" class="icon-grid2-2">
                    </div>

                    <div class="design category">
                        <h3>Experience</h3>
                        <img src="images/logos/logo_photoshop.png" alt="" class="icon-grid3-1">
                        <img src="images/logos/logo_illustrator.png" alt="" class="icon-grid3-2">
                        <img src="images/logos/logo_xd.png" alt=""  class="icon-grid3-3">
                        <img src="images/logos/logo_figma.png" alt="" class="icon-grid3-4">
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="project_section">
            <div class="project_content">
                <div class="title">
                    <h1>my project</h1>
                    <h2>What i've done ?</h2>
                </div>

                <div class="projects_card">
                    <div class="web_project projects_type">
                        <h2>Web Project</h2>
                        <div class="card active">
                            <img src="images/project-cover/onmix-cover.jpg" alt="" class="card_cover">
                            <div class="card_banner">
                                <div class="card_left_part">
                                    <img src="images/project-logo/onmix_site_icon.png" alt="">
                                    <div class="card_banner_text">
                                        <h3>Onmix</h3>
                                        <h4>y1 project / web site</h4>
                                    </div>
                                </div>

                                <a href="www.onmix.tk" class="card_right_part">
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php require_once 'templates/footer.php'; ?>
</body>
</html>

