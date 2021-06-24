import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    function addMeetupHandler(enteredMeetupData) {
        console.log("I am add meet up handler funciton and I am coming from new meet up page")
        console.log(enteredMeetupData)    
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage