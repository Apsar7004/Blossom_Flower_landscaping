class SpecialHeader extends HTMLElement{
    connectedCallback(){
        let pathname = window.location.pathname;
        pathname = pathname.substring(pathname.lastIndexOf('/'));
        this.innerHTML = 
        `<header>
        <!-- Spinner Start -->
        <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div>
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="container-fluid bg-dark text-light px-0 py-2">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <span class="fa fa-phone-alt me-2"></span>
                    <span>024919484</span>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center">
                    <span class="far fa-envelope me-2"></span>
                    <span>blossomflowers2020@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img class="band_logo" src='./asserts/logo/company_logo.png'/>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="./index.html" class="nav-item nav-link ${pathname === '/index.html'|| '/' ? 'active' : ''}">Home</a>
                <a href="./about.html" class="nav-item nav-link ${pathname === '/about.html' ? 'active' : ''}">About</a>
                <a href="./service.html" class="nav-item nav-link ${pathname === '/service.html' ? 'active' : ''}">Services</a>
                <a href="./accreditation.html" class="nav-item nav-link ${pathname === '/accreditation.html' ? 'active' : ''}">Accreditation</a>
                <a href="./project.html" class="nav-item nav-link ${pathname === '/project.html' ? 'active' : ''}">Projects</a>
                <a href="./contact.html" class="nav-item nav-link ${pathname === '/contact.html' ? 'active' : ''}">Contact</a>
                <a href="./asserts/pdf/Blossom-portfolio.pdf" class="nav-item nav-link">
                    <img width="25" height="25" src="./img/icon/download-icon.svg" />
                    Protfolio
                </a>
            </div>

        </div>
    </nav>
    <!-- Navbar End -->

</header>`
    }
}

customElements.define('special-header' , SpecialHeader)


class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `    <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
    
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-4">Services</h4>
                        <p class="btn btn-link">Hard & Soft Landscaping</p>
                        <p class="btn btn-link">Irrigation Design and Execution</p>
                        <p class="btn btn-link">Swimming Pool & Water features</p>
                        <p class="btn btn-link">Pergolas & Shade Structures</p>
                        <p class="btn btn-link">Lighting Works</p>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <h4 class="text-white mb-4">Quick Links</h4>
                        <a class="btn btn-link" href="./about.html">About Blossom</a>
                        <a class="btn btn-link" href="./contact.html">Contact Us</a>
                        <a class="btn btn-link" href="./service.html">Our Services</a>
                        <a class="btn btn-link" href="./accreditation.html">Accreditation</a>
                        <a class="btn btn-link" href="./project.html">Our Projects</a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-white mb-4">Our Office</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Al firdous tower,<br/>15 th floor,<br/>same building of km trading,<br/>Office no 38,39
                        </p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>Landline no 024919484</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>blossomflowers2020@gmail.com</p>
    
                    </div>
    
                </div>
            </div>
        </div>
        <!-- Footer End -->
    
    
        <!-- Copyright Start -->
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Blossom</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <a class="border-bottom">We bring Nature close to you</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright End -->
    
    
        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
                class="bi bi-arrow-up"></i></a>`
    }
}

customElements.define('special-footer' , SpecialFooter)
