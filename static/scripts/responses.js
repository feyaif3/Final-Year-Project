function getBotResponse(input) {
    if (input == "what is your name?") {
        return "My name is Chatbot, what's your name?";
    } else if (input == "Frank") {
        return "Nice to meet you Frank";
    } else if (input == "frank") {
        return "Nice to meet you Frank";
    } else if (input == "goodbye") {
        return "Goodbye, Frank";
    } else if (input == "thank you for the lesson"){
        return "It was nice teaching you, see you soon.";
    } else if (input == "hi") {
        return "Hello"
    }

  /*  if(input== "how do I say I like football in spanish?") {
        return "me gusta el fútbol";
    } else if ("me gusta el futbol") {
        return "Qué equipo apoyas?";
    } else if ("what does that mean?") {
        return "It means, what team do you support?";
    } else if ("i support manchester city") {
        return "tu apoyas al manchester city";
    } else if ("what team do you like") {
        return "me gusta el equipo barcelona";
    } else if ("does that mean you like the team barcelona?") {
        return  "muy buen, you are correct";
    }*/

    if (input== "how do I say I like cooking in french?") {
        return "J'aime cuisiner";
    } else if ("i like to cook chilli con carne") {
        return "you mean, j'aime cuisiner le chili con carne"
    } else if ("is that how you say it in French?") {
        return "oui, type it in, so you remember it."
    } else if ("j'aime cuisiner le chili con carne") {
        return "très bien Frank"
    } else if ("merci") {
        return "you are welcome Frank, hopefully you remember everything"
    }

    if (input == "how do I say I like driving in german?") {
        return "ich fahre gern";
    } else if ("ich fahre gern my car") {
        return "sehr gut, that means very good. Do you have a favourite car brand?"
    } else if ("my favourite car brand is Audi, how do i say that in german?") {
        return "Meine Lieblingsautomarke ist Audi";
    } else if ("that is very hard to say and remember"){
        return "it is however if you practice with me everyday you will remember";
    } else {
        return "I don't understand, can you try saying that again";
    }
}


