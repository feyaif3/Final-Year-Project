function getBotResponse(input) {
    if (input == "what is your name?") {
        return "My name is Chatbot, what's your name?";
    } else if (input == "Frank") {
        return "Nice to meet you Frank";
    } else if (input == "frank") {
        return "Nice to meet you Frank";
    } else if (input == "goodbye") {
        return "Goodbye, Frank";
    } else if (input == "thank you for the lesson")
        return "It was nice teaching you, see you soon.";
}

    if(input== "how do you say I like football in spanish?") {
        return "me gusta el fútbol";
    } else if ("me gusta el futbol"){
        return "Qué equipo apoyas?";
    } else if ("what does that mean?"){
        return "It means, what team do you support?";
    } else if ("i support manchester city"){
        return "tu apoyas al manchester city"
    }

    if (input== "how do you say I like cooking in french?") {
        return ""
    }

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}