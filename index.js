exp-1-online shopping


---home.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOME</title>
    <link rel="stylesheet" href="s.css">
</head>
<body>
    <header>
        <h1>S MART</h1>
        <nav>
            <a href="#">Home</a>
            <a href="catalog.html">Catalog</a>
            <a href="register.html">Register</a>
            <a href="cart.html">Cart</a>
            <a href="contact.html">Contact</a>
            <a href="login.html">Log In</a>
        </nav>
    </header>
    <main>
        <section>
            <center>
                <h1>Welcome! to the S MART</h1>
                <h2>The Intelligent Store</h2>
                <br>
                <img src="images/SAP_WDF49_SMART_WEB-28_F.jpg" alt="" width="1000" height="400">
                <br><br>
            </center>
        </section>

    </main>
    <footer>
        ©This is an S Mart CopyRight
    </footer>
</body>
</html>


--catalog.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CATALOG</title>
    <link rel="stylesheet" href="s.css">
    <style>
        section{
            background-color: bisque;
            border-radius: 15px;
            margin:05px;
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
        }
        article{
            background-color: burlywood;
            border-radius: 15px;
            padding: 10px;
            text-align: center;
        }
        article:hover{
            background-color: whitesmoke;
        }
    </style>
</head>
<body>
    <header>
        <h1>S MART</h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="#">Catalog</a>
            <a href="register.html">Register</a>
            <a href="cart.html">Cart</a>
            <a href="contact.html">Contact</a>
            <a href="login.html">Log In</a>
        </nav>
    </header>
    <main>
        <section>
            <article>
                <h1>Fashion</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui beatae in et adipisci sit, repellendus quis! Officia dolores repellat aliquam commodi ipsam iure ut accusamus consectetur? Dolorum, perspiciatis minus?</p>
            </article>

            <article>
                <h1>Electronics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora obcaecati nobis doloremque cum porro, a, explicabo ullam ipsa optio, pariatur eos. Omnis impedit eum, enim quo molestiae laudantium. Hic?</p>
            </article>

            <article>
                <h1>Groceries</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora obcaecati nobis doloremque cum porro, a, explicabo ullam ipsa optio, pariatur eos. Omnis impedit eum, enim quo molestiae laudantium. Hic?</p>
            </article>

            <article>
                <h1>Furniture</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora obcaecati nobis doloremque cum porro, a, explicabo ullam ipsa optio, pariatur eos. Omnis impedit eum, enim quo molestiae laudantium. Hic?</p>
            </article>

            <article>
                <h1>Back to School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora obcaecati nobis doloremque cum porro, a, explicabo ullam ipsa optio, pariatur eos. Omnis impedit eum, enim quo molestiae laudantium. Hic?</p>
            </article>

            <article>
                <h1>Toys</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora obcaecati nobis doloremque cum porro, a, explicabo ullam ipsa optio, pariatur eos. Omnis impedit eum, enim quo molestiae laudantium. Hic?</p>
            </article>
        </section>
    </main>
    <footer>
        ©This is an S Mart CopyRight
    </footer>
</body>
</html>


---register.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="s.css">
    <style>
        section{
            text-align: center;
            background-color:bisque;
            padding: 10px;
            border-radius: 15px;
            width: 50%;
            margin-left: 25%;
            margin-top: 10px;
        }
        section form{
            background-color:burlywood;
            padding: 10px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <header>
        <h1>S MART</h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="catalog.html">Catalog</a>
            <a href="#">Register</a>
            <a href="cart.html">Cart</a>
            <a href="contact.html">Contact</a>
            <a href="login.html">Log In</a>
        </nav>
    </header>
    <main>
        <section>
                <h1>Registration Form</h1>
                <form action="">
                    <p>
                        <input type="text" placeholder="Name" id="Name">
                    </p>
                    <p>
                        <label for="date">DOB : </label>
                        <input type="date" placeholder="Date" id="date">
                    </p>
                    <p>
                        <input type="text" placeholder="Phone No." id="Phone No.">
                    </p>
                    <p>
                        <input type="email" placeholder="Email" id="mail">
                    </p>
                    <p>
                        <input type="password" placeholder="Password" id="Password">
                    </p>
                    <p>
                        <input type="password" placeholder="Confirm Password" id="Confirm Password">
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
        </section>
    </main>
    <footer>
        ©This is an S Mart CopyRight
    </footer>
</body>
</html>


---cart.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="s.css">
    <style>
        .Product{
            text-align: center;
            background-color: bisque;
            border-radius: 15px;
            margin:05px;
            padding: 10px;
        }
        section{
            text-align: center;
            background-color: bisque;
            border-radius: 15px;
            margin:05px;
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
        }
        article{
            text-align: center;
            background-color: burlywood;
            border-radius: 15px;           
        }
        .s{
            padding-left: 25%;
        }
        button{
            border-style: groove;
            border-radius: 15px;
        }
        button:hover{
            background-color: burlywood;
        }
    </style>
</head>
<body>
    <header>
        <h1>S MART</h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="catalog.html">Catalog</a>
            <a href="register.html">Register</a>
            <a href="#">Cart</a>
            <a href="contact.html">Contact</a>
            <a href="login.html">Log In</a>
        </nav>
    </header>

    <h1 class="Product">Products</h1>

    <section>    
        <article>
            <h1>Shirt</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eum.</p>
            <section class="s">
                <button>Remove</button>
                <button>Buy</button>
            </section>
        </article>
        <article>
            <h1>Mobile</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eum.</p>
            <section class="s">
                <button>Remove</button>
                <button>Buy</button>
            </section>
        </article>
        <article>
            <h1>Laptop</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eum.</p>
            <section class="s">
                <button>Remove</button>
                <button>Buy</button>
            </section>
        </article>
    </section>
    <footer>
        ©This is an S Mart CopyRight
    </footer>
</body>
</html>


---contact.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="s.css">
    <style>
        section{
            text-align: center;
            background-color: bisque;
            border-radius: 15px;
            margin:05px;
            padding: 10px;
        }
        article{
            background-color: burlywood;
            border-radius: 15px;
            padding: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>S MART</h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="catalog.html">Catalog</a>
            <a href="register.html">Register</a>
            <a href="cart.html">Cart</a>
            <a href="#">Contact</a>
            <a href="login.html">Log In</a>
        </nav>
    </header>
    <section>
        <h1>Contact Us</h1><br><br>
        <article>
            Mail Id : smart@gmail.com <br> <br>
            Ph. No. : 1234567890 , 0987654321 <br><br>
            Address : 18-4-256/A, Banjara Hills, Hyderabad
        </article>
    </section>
    <footer>
        ©This is an S Mart CopyRight
    </footer>
</body>
</html>


---login.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="s.css">
    <style>
        section{
            text-align: center;
            background-color:bisque;
            padding: 10px;
            border-radius: 15px;
            width: 50%;
            margin-left: 25%;
            margin-top: 10px;
        }
        section form{
            background-color:burlywood;
            padding: 10px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <header>
        <h1>S MART</h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="catalog.html">Catalog</a>
            <a href="register.html">Register</a>
            <a href="cart.html">Cart</a>
            <a href="contact.html">Contact</a>
            <a href="#">Log In</a>
        </nav>
    </header>
    <main>
        <section>
                <h1>Log In</h1>
                <form action="">
                    <p>
                        <input type="email" placeholder="Email" id="mail">
                    </p>
                    <p>
                        <input type="password" placeholder="Password" id="Password">
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
        </section>
    </main>
    <footer>
        ©This is an S Mart CopyRight
    </footer>
</body>
</html>





--s.css

header{
    background-color: yellow;
    margin: 5px;
    padding: 10px;
    border-radius: 15px;
    border-style: groove;
    border-color:blanchedalmond;
    display: flex;
    align-items: center;
}

nav{
    padding: 10px;
    margin-left: 35%;
}

nav a{
    background-color: goldenrod;
    text-decoration: none;
    padding: 5px 20px;
    font-size: 20px;
    border-style: groove;
    border-radius: 50px;
    border-width: 2px;
    border-color: brown;
    margin: 0px 15px;
}

nav a:hover{
    background-color: brown;
    color: white;
    text-decoration: none;
}

footer{
    background-color: brown;
    color: white;
    margin: 5px;
    padding-left: 10px;
    border-radius: 15px;
}

-----------------------------------------------------------------------------------------------------------------------------------------------------

exp-2.-Bootstrap

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>online shopping</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Online Shopping</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Categoiers
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">MEN</a></li>
                            <li><a class="dropdown-item" href="#">WOMEN</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">ELECTRONIC DEVICES</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cart.html">cart</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form>
                <div class="mx-2">
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</button>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#SignUpModal">SignUp</button>
                </div>
            </div>
        </div>
    </nav>
    <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="LoginModalLable">Login to Online Shopping</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="SignUpModal" tabindex="-1" aria-labelledby="SignUpModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="SignUpModalLabel">Create an Account</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2"
                                placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://source.unsplash.com/1600x500/?shopping" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h2>WELCOME TO SHOPPING WORLD</h2>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1600x500/?men wear" class="d-block w-100" alt="...">

            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1600x500/?women wear" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container">
        <div class="album py-5 bg-body-tertiary">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src="https://source.unsplash.com/400x250/?laptop" alt="">
                            <div class="card-body">
                                <p class="card-text">Laptop</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-success">BUY</button>
                                        <button type="button" class="btn btn-sm btn-danger">ADD TO CART</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src="https://source.unsplash.com/400x250/?smartphone" alt="">
                            <div class="card-body">
                                <p class="card-text">SmartPhone</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-success">BUY</button>
                                        <button type="button" class="btn btn-sm btn-danger">ADD TO CART</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src="https://source.unsplash.com/400x250/?men" alt="">
                            <div class="card-body">
                                <p class="card-text">MEN</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-success">BUY</button>
                                        <button type="button" class="btn btn-sm btn-danger">ADD TO CART</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src="https://source.unsplash.com/400x250/?women" alt="">
                            <div class="card-body">
                                <p class="card-text">WOMEN</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-success">BUY</button>
                                        <button type="button" class="btn btn-sm btn-danger">ADD TO CART</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src="https://source.unsplash.com/400x250/?kid" alt="">
                            <div class="card-body">
                                <p class="card-text">KIDS</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-success">BUY</button>
                                        <button type="button" class="btn btn-sm btn-danger">ADD TO CART</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>

</html>

------------------------------------------------------------------------------------------------------------------------------------------------------------

exp-3-client-side validation

---register.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="s.css">
    <style>
        section{
            text-align: center;
            background-color:bisque;
            padding: 10px;
            border-radius: 15px;
            width: 50%;
            margin-left: 25%;
            margin-top: 10px;
        }
        section form{
            background-color:burlywood;
            padding: 10px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <main>
        <section>
                <h1>Registration Form</h1>
                <form action="" id="Registration">
                    <p>
                        <input type="text" placeholder="Name" id="Name">
                    </p>
                    <p>
                        <label for="date">DOB : </label>
                        <input type="date" placeholder="Date" id="date">
                    </p>
                    <p>
                        <input type="text" placeholder="Phone No." id="Phone No.">
                    </p>
                    <p>
                        <input type="email" placeholder="Email" id="mail">
                    </p>
                    <p>
                        <input type="password" placeholder="Password" id="Password">
                    </p>
                    <p>
                        <input type="password" placeholder="Confirm Password" id="Confirm Password">
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                <h4 style="text-align: center;"><a href="login.html">Already A Member?<br> Sign in</a></h4>
        </section>
        

    </main>
    
    <script src="scripts/register-script.js"></script>
</body>
</html>

----login.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOG IN</title>
    <link rel="stylesheet" href="s.css">
    <style>
        section{
            text-align: center;
            background-color:bisque;
            padding: 10px;
            border-radius: 15px;
            width: 50%;
            margin-left: 25%;
            margin-top: 10px;
        }
        section form{
            background-color:burlywood;
            padding: 10px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <main>
        <section>
                <h1>Log In</h1>
                <form action="" id="Log">
                    <p>
                        <input type="email" placeholder="Email" id="mail">
                    </p>
                    <p>
                        <input type="password" placeholder="Password" id="Password">
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                <h4 style="text-align: center;"><a href="register.html">Not A Member?<br>Register</a></h4>

        </section>
    </main>
    <script src="scripts/login-script.js"></script>

</body>
</html>

----register-scripts.js

const resfrom=document.getElementById('Registration')
resfrom.addEventListener('submit',validateResForm)

function validateResForm(event){
    event.preventDefault();
    const email=document.getElementById('mail');
    const pss=document.getElementById('Password');
    if(!validateEmail(email.value)){
        alert('Please enter valid email address');
        return;
    }
    
    if(!validatePass(pss.value)){
        alert('Please enter valid password');
        return;
    }

    alert('Registration successfull');
}

function validateEmail(email){
    const ereg=/^[a-zA-Z0-9+-_/]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;
    return ereg.test(email);
}

function validatePass(pss){
    const minlen=8;
    const hasUpper=/[A-Z]/.test(pss);
    const hasLower=/[a-z]/.test(pss);
    const hasNumber=/\d/.test(pss);
    return (pss.length>=minlen && hasUpper && hasLower && hasNumber)
}

----login.scripts.js

const resfrom=document.getElementById('Log')
resfrom.addEventListener('submit',validateResForm)

function validateResForm(event){
    event.preventDefault();
    const email=document.getElementById('mail');
    const pss=document.getElementById('Password');
    if(!validateEmail(email.value)){
        alert('Please enter valid email address');
        return;
    }
    
    if(!validatePass(pss.value)){
        alert('Please enter valid password');
        return;
    }

    alert('Login successfull');
}

function validateEmail(email){
    const ereg=/^[a-zA-Z0-9+-_/]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;
    return ereg.test(email);
}

function validatePass(pss){
    const minlen=8;
    const hasUpper=/[A-Z]/.test(pss);
    const hasLower=/[a-z]/.test(pss);
    const hasNumber=/\d/.test(pss);
    return (pss.length>=minlen && hasUpper && hasLower && hasNumber)
}

--------------------------------------------------------------------------------------------------------------------------------------------------------

exp-5-CRUD OPERATIONS

package connections;

import java.sql.*;

public class Demo {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con=DriverManager.getConnection("Jdbc:mysql://localhost:3306/College","root","root");
		Statement st=con.createStatement();
		System.out.println("Connection established!");
		
		st.executeUpdate("create table student(RNo int,Name varchar(10),Branch char(6))");
		System.out.println("Student table created!");
		
		st.executeUpdate("insert into student values(100,'Ram','CSE-DS')");
		st.executeUpdate("insert into student values(102,'Shyam','CSE-DS')");
		System.out.println("Data inserted into table!");
		
		ResultSet rs=st.executeQuery("select * from student");
		while(rs.next()) {
			int a=rs.getInt(1);
			String b=rs.getString(2);
			String c=rs.getString(3);
			System.out.println(a+" "+b+" "+c);
		}
		System.out.println();
				
		st.executeUpdate("update student set Rno=101 where Name='Shyam'");
		System.out.println("Table data updated!\n");
		
		st.executeUpdate("delete from student where Name='Ram'");
		System.out.println("Deletion completed!\nUpdated data:\n");
		
		rs=st.executeQuery("select * from student");
		while(rs.next()) {
			int a=rs.getInt(1);
			String b=rs.getString(2);
			String c=rs.getString(3);
			System.out.println(a+" "+b+" "+c);
		}
	}
}


O/P:
Connection established!
Student table created!
Data inserted into table!
100 Ram CSE-DS
102 Shyam CSE-DS

Table data updated!

Deletion completed!
Updated data:

101 Shyam CSE-DS

--------------------------------------------------------------------------------------------------------------------------------------------------------------

exp-6.xml,dtd,xsd

---XML File (books.xml):

<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book>
        <title>Introduction to XML</title>
        <author>John Doe</author>
        <price>29.99</price>
    </book>
    <book>
        <title>Web Development with XML</title>
        <author>Jane Doe</author>
        <price>39.99</price>
    </book>
</bookstore>

----DTD (books.dtd):

<!ELEMENT bookstore (book+)>
<!ELEMENT book (title, author, price)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ELEMENT price (#PCDATA)>

----XSD (books.xsd):

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:element name="bookstore">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="book" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="title" type="xs:string"/>
              <xs:element name="author" type="xs:string"/>
              <xs:element name="price" type="xs:decimal"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>

</xs:schema>

------------------------------------------------------------------------------------------------------------------------------------------------------------

exp-9 naggu.come(http os path event)

---http.js

const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/html'
    });
    res.write("<h1> welcome to cvr college</h1>");
    res.end();

})
const PORT=1111;
const IP='127.0.0.1';
server.listen(PORT,()=>{
    console.log("server running on PORT"+ PORT);
})

----O/P:
>node http
server running on PORT1111
localhost:1111


----os.js

const os=require('os');
console.log("platform:${os.platform()}")
console.log("architectuere:${os.arch()}")
console.log("total memory:${os.totalmem()}bytes")
console.log("free memory:${os.freemem()}bytes")
console.log("uptime:${os.uptime()}seconds")
console.log("hostname:"+os.hostname())
console.log("operating system:"+os.release())
console.log("default directory for temporary files:"+os.tmpdir())
console.log("operating system name:"+os.type())
console.log(os.cpus())

---O/P:
>node os


-----event.js

const event =require('events');
const emitter=new event.EventEmitter();
emitter.on('buttonClicked',()=>{
    console.log('button is clicked');
});
emitter.emit('buttonClicked')

----O/P:
>node event


-----path.js

const path=require('path');

console.log('__filename : ',__filename);
console.log('__dirname : ',__dirname);

console.log('path.basename(__filename) : ',path.basename(__filename));
console.log('path.basename(__dirname) : ',path.basename(__dirname));

console.log('path.extname(__filename) : ',path.extname(__filename));
console.log('path.extname(__dirname) : ',path.extname(__dirname));

console.log('path.parse(__filename) : ',path.parse(__filename))
console.log('path.parse(__dirname) : ',path.parse(__dirname)) 

console.log('path.format(path.parse(__filename)) : ',path.format(path.parse(__filename)))
console.log('path.format(path.parse(__dirname)) : ',path.format(path.parse(__dirname)))

console.log('path.isAbsolute(__filename) : ',path.isAbsolute(__filename))
console.log('path.isAbsolute(__dirname) : ',path.isAbsolute(__dirname))

console.log('path.join("folderName","fileName") : ',path.join("experiment10","os.js"))
console.log('path.join(__dirname,"fileName") : ',path.join(__dirname,"os.js"))

console.log('path.resolve(__dirname) : ',path.resolve(__dirname,"path.js"))

O/P:
>node path

-------------------------------------------------------------------------------------------------------------------------------------------------------------

exp-10 CRUD(POSTMAN)

const express =require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const nodemon=require('nodemon');

const app=express();
const port=3000;

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
});

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to mysql: ',err);
        return ;
    }
    console.log('Connected to mysql');
    
});

app.use(bodyParser.json());
app.get('/getAllStudentInfo',(req,res)=>{
    connection.query('select * from student_info',(err,results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/getSpecifiedStudentInfo/:id',(req,res)=>{
    const stdId=req.params.id;
    connection.query('select * from student_info where id=?',[stdId],(err,results)=>{
        if(err) throw err;
        res.json(results[0]);
    });
});

app.post('/addStudent',(req,res)=>{
    const {id,name,age}=req.body;
    connection.query('insert into student_info values(?,?,?)',[id,name,age],(err,results)=>{
        if(err) throw err;
        res.json({id,name,age});
    });
});

app.put('/updateStudentInfo/:id',(req,res)=>{
    const stdId=req.params.id;
    const {name,age}=req.body;
    connection.query('update student_info set name=?, age=? where id=?',[name,age,stdId],(err)=>{
        if(err) throw err;
        res.json({id:stdId ,name,age});
    });
});

app.delete('/deleteStudentInfo/:id',(req,res)=>{
    const stdId=req.params.id;
    connection.query('delete from student_info where id=?',[stdId],(err)=>{
        if(err) throw err;
        res.json({message:'Student info deleted successfully',id:stdId});
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

------------------------------------------------------------------------------------------------------------------------------------------------------------------

exp-11 jwt

const express =require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const nodemon=require('nodemon');
const jwt=require('jsonwebtoken');

const app=express();
const port=3000;
const secretKey='abc@123';

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
});

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to mysql: ',err);
        return ;
    }
    console.log('Connected to mysql');
});

const authenticateToken=(req,res,next)=>{
    const token=req.header('Authorization');
    console.log(token);
    if( !token || !token.startsWith('Bearer')){
        return res.sendStatus(401).json({message:'Unauthorized'});
    }
    const tokenValue=token.split(' ')[1];
    jwt.verify(tokenValue,secretKey,(err,user)=>{
        if(err) return res.status(403).json({message:'Forbidden'});
        req.user=user;
        next();
    });
}

app.use(bodyParser.json());

app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    if(username==='admin' && password==='admin'){
        const user={username:'admin'};
        const accessToken=jwt.sign(user,secretKey,{expiresIn:'1h'});
        res.json({accessToken});
    }
    else{
        res.status(401).json({message:'Invalid credentials'})
    }
})

app.get('/getAllStudentInfo',authenticateToken,(req,res)=>{
    connection.query('select * from student_info',(err,results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/getSpecifiedStudentInfo/:id',authenticateToken,(req,res)=>{
    const stdId=req.params.id;
    connection.query('select * from student_info where id=?',[stdId],(err,results)=>{
        if(err) throw err;
        res.json(results[0]);
    });
});

app.post('/addStudent',authenticateToken,(req,res)=>{
    const {id,name,age}=req.body;
    connection.query('insert into student_info values(?,?,?)',[id,name,age],(err,results)=>{
        if(err) throw err;
        res.json({id,name,age});
    });
});

app.put('/updateStudentInfo/:id',authenticateToken,(req,res)=>{
    const stdId=req.params.id;
    const {name,age}=req.body;
    connection.query('update student_info set name=?, age=? where id=?',[name,age,stdId],(err)=>{
        if(err) throw err;
        res.json({id:stdId ,name,age});
    });
});

app.delete('/deleteStudentInfo/:id',authenticateToken,(req,res)=>{
    const stdId=req.params.id;
    connection.query('delete from student_info where id=?',[stdId],(err)=>{
        if(err) throw err;
        res.json({message:'Student info deleted successfully',id:stdId});
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

------------------------------------------------------------

