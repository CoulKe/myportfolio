<template>
  <section id="contacts" data-aos="zoom-in">
                <h1>Contacts</h1>
                <p>
                    Facebook: <a href="https://www.facebook.com/coulmp">Luteya Coulston</a>
                </p>
                <p>
                    Twitter: <a href="https://twitter.com/TypiCoul">@TypiCoul</a>
                </p>
                <p>
                    Whatsapp: <a
                        href="https://wa.me/254714026815?text=Hello+Coulston%2C+I+visited+your+website+and+..">+254714026815</a>
                </p>
                <p>Github: <a href="https://github.com/CoulKe">CoulKe</a></p>
            </section>

            <form action="https://send.pageclip.co/eDMsmW8Z6R3Uhp7n2rcPROqrRg5rO8e9" data-aos="fade-up"
                class="pageclip-form" id="contactForm" method="post">
                <legend>Fill the form to leave a message:</legend>
                <em>(other contacts in the <a href="/#contacts">contacts</a> section)</em> <br>
                <label for="firstname">First name: </label> <br>
                <input type="text" id="firstname" name="name"> <br>
                <label for="email">Email: </label> <br>
                <input type="email" id="email" name="email" /> <br>
                <label for="message">Message: </label> <br>
                <textarea name="message" id="message" cols="25" rows="10"></textarea>
                <!-- This button will have a loading spinner. Keep the inner span for best results. -->
                <button type="submit" id="submit" class="pageclip-form__submit">
                    <span>Send</span>
                </button>
            </form>
</template>

<style lang='scss' scoped>
//light

.light{
  #contacts{
  #contactForm {
    input[type="text"],
    input[type="email"],
    textarea {
      background-color: rgb(252, 252, 252);
      border: 1px solid #111;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    textarea:focus {
      outline: 2px solid #a0a5d1;
      background-color: #fff;
    }
    #submit {
      color: $darkerBlue;
    }
  }
}
}
//dark
.dark{
  
  #contactForm {
    input[type="text"],
    input[type="email"],
    textarea {
      color: $darkerWhite;
      background-color: $lightGrey;
      border: 1px solid #111;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    textarea:focus {
      outline: 2px solid $darkerWhite;
      background-color: $lightGrey;
    }
    #submit {
      color: $darkerWhite;
      background-color: $lightGrey;
      font-weight: 500;
    }
  }
}

//layout
#contacts{
  margin: auto;
}
#contactForm {
    padding: 1rem 0;
    position: static;
    line-height: 2rem;
    margin: auto;

    legend,
    em {
      text-align: center;
    }
    legend {
      width: 100%;
      text-transform: capitalize;
      font-size: 14px;
      font-weight: 700;
    }
    em {
      font-size: 0.8rem;
      display: block;
    }
    textarea,
    input {
      min-width: 100%;
      max-width: 100%;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      padding: 0.2rem;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    textarea:focus {
      padding: 2px;
      border: none;
    }
    #submit {
      position: static;
      cursor: pointer;
      width: 100%;
      font-weight: 900;
      font-size: large;
      padding: 0.5rem;
    }
  }
  @media(min-width: 700px){
    #contactForm{
      width: 500px;
    }
  }
  @media(min-width: 1000px){
    #contactForm{
      width: 800px;
    }
  }
</style>