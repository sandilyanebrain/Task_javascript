var stud;
var studform = [];
var editIndex;

function validateInfo() {

    var formError = false;
    var studentList = [];

    /*Student name Validation*/

    var stud_name = document.getElementById("stud_name").value;

    if (stud_name == null || stud_name == "") {
        document.getElementById("stud_name_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("stud_name_ErrorId").innerHTML = "";
        formError = false;
    }

    /*Register No Validation */

    var register_no = document.getElementById("register_no").value;

    if (register_no == null || register_no == "") {
        document.getElementById("register_no_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("register_no_ErrorId").innerHTML = "";
        formError = false;
    }

    /*Gender Validation */

    var stud_gender = document.querySelector('input[name="gender"]:checked');
    if (null == stud_gender || stud_gender == "") {
        document.getElementById("gender_ErrorId").innerHTML = "Required";
        iserror = true;
    } else {
        stud_gender = document.querySelector('input[name="gender"]:checked').value;
        document.getElementById("gender_ErrorId").innerHTML = " ";
        formError = false;
    }


    /*Email Validation */

    var email = document.getElementById("email").value;

    if (email == null || email == "") {
        document.getElementById("email_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("email_ErrorId").innerHTML = "";
        formError = false;
    }



    /*Phone No Validation */

    var phone_no = document.getElementById("phone_no").value;

    if (phone_no == null || phone_no == "") {
        document.getElementById("phoneNo_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("phoneNo_ErrorId").innerHTML = "";
        formError = false;
    }

    /*DOB validation*/


    var dob = document.getElementById("dob").value;

    if (dob == null || dob == "") {
        document.getElementById("dob_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("dob_ErrorId").innerHTML = "";
        formError = false;
    }

    /*Nationality validation*/

    var nationality = document.getElementById("nationality").value;

    if (nationality == null || nationality == "") {
        document.getElementById("nationalilty_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("nationalilty_ErrorId").innerHTML = "";
        formError = false;
    }

    // <!--Academic Information-->


    /*DOJ validation*/


    var doj = document.getElementById("doj").value;

    if (doj == null || doj == "") {
        document.getElementById("doj_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("doj_ErrorId").innerHTML = "";
        formError = false;
    }

    /* Degree Type Validation*/

    var acd_type = document.getElementById("acd_type").value;

    if (acd_type == null || acd_type == "") {
        document.getElementById("acd_type_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("acd_type_ErrorId").innerHTML = "";
        formError = false;
    }


    /* Degree Validation*/

    var acd_degree = document.getElementById("acd_degree").value;

    if (acd_degree == null || acd_degree == "") {
        document.getElementById("acd_degree_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("acd_degree_ErrorId").innerHTML = "";
        formError = false;
    }

    /* Branch Validation*/

    var acd_branch = document.getElementById("acd_branch").value;

    if (acd_branch == null || acd_branch == "") {
        document.getElementById("acd_branch_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("acd_branch_ErrorId").innerHTML = "";
        formError = false;
    }

    /* Year Validation*/

    var acd_year = document.getElementById("acd_year").value;

    if (acd_year == null || acd_year == "") {
        document.getElementById("acd_year_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("acd_year_ErrorId").innerHTML = "";
        formError = false;
    }

    /* Semester Validation*/

    var acd_semester = document.getElementById("acd_semester").value;

    if (acd_semester == null || acd_semester == "") {
        document.getElementById("acd_sem_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("acd_sem_ErrorId").innerHTML = "";
        formError = false;
    }

    /* Batch Validation*/

    var acd_batch = document.getElementById("acd_batch").value;

    if (acd_batch == null || acd_batch == "") {
        document.getElementById("acd_batch_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("acd_batch_ErrorId").innerHTML = "";
        formError = false;
    }




    // <!--Parent Information-->


    /*Father name Validation*/

    var father_name = document.getElementById("father_name").value;

    if (father_name == null || father_name == "") {
        document.getElementById("father_name_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("father_name_ErrorId").innerHTML = "";
        formError = false;
    }


    /*Mother name Validation*/

    var mother_name = document.getElementById("mother_name").value;

    if (mother_name == null || mother_name == "") {
        document.getElementById("mother_name_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("mother_name_ErrorId").innerHTML = "";
        formError = false;
    }

    /*Contact No Validation */

    var contact_no = document.getElementById("contact_no").value;

    if (contact_no == null || contact_no == "") {
        document.getElementById("contact_no_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("contact_no_ErrorId").innerHTML = "";
        formError = false;
    }


    /*Father Occupation  Validation*/

    var father_occup = document.getElementById("father_occup").value;

    if (father_occup == null || father_occup == "") {
        document.getElementById("father_occup_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("father_occup_ErrorId").innerHTML = "";
        formError = false;
    }



    /*Mother Occupation Validation*/

    var mother_occup = document.getElementById("mother_occup").value;

    if (mother_occup == null || mother_occup == "") {
        document.getElementById("mother_occup_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("mother_occup_ErrorId").innerHTML = "";
        formError = false;
    }


    /*Yearly Income Validation*/

    var yearly_income = document.getElementById("yearly_income").value;

    if (yearly_income == null || yearly_income == "") {
        document.getElementById("yearly_income_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("yearly_income_ErrorId").innerHTML = "";
        formError = false;
    }


    /*Feedback */

    var feedback = document.getElementById("feedback").value;
    if (null == feedback || feedback.trim() == "") {

        document.getElementById("feedback_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("feedback_ErrorId").innerHTML = "";
        formError = false;
    }


    // <!--Other Information-->

    /*AGE  Validation */

    var age = document.getElementById("age").value;

    if (age == null || age == "") {
        document.getElementById("age_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("age_ErrorId").innerHTML = "";
        formError = false;
    }

    /*Accomadation Validation */

    var searchvalue = document.getElementById("stud_accomadation").value;
    if (searchvalue != null && searchvalue != '') {

        document.getElementById("stud_accomadation_ErrorId").innerHTML = "";
        formError = true;
        if (is_valid_datalist_value('accomadation', document.getElementById('stud_accomadation').value)) {

        } else {
            document.getElementById("stud_accomadation_ErrorId").innerHTML = "Choose form the list  ";
            formError = false;
        }

    } else {
        document.getElementById("stud_accomadation_ErrorId").innerHTML = "Required";

    }

    function is_valid_datalist_value(idDataList, inputValue) {
        var option = document.querySelector("#" + idDataList + " option[value='" + inputValue + "']");
        if (option != null) {
            return option.value.length > 0;
        }
        return false;
    }


    /**Event Participation Validation MultiSelect */

    var multiSelect = document.getElementById("event_particip").value;
    var multiSelectLength = document.getElementById("event_particip").options.length;
    var selectedProfesionArr = [];
    for (var i = 0; i < multiSelectLength; i++) {
        if (document.getElementById("event_particip").options[i].selected === true) {
            selectedProfesionArr.push(document.getElementById("event_particip").options[i].value);
            console.log(selectedProfesionArr);
        }
    }
    if (selectedProfesionArr.length == 0) {
        document.getElementById("event_particip_ErrorId").innerHTML =
            "Required";
    } else if (selectedProfesionArr.length >= 2) {
        document.getElementById("event_particip_ErrorId").innerHTML = "";
        formError = true;
    } else {
        document.getElementById("event_particip_ErrorId").innerHTML =
            "Atleast 2 Events are required";
        formError = false;
    }


    /* Blood group Validation*/

    var blood_group = document.getElementById("blood_group").value;

    if (blood_group == null || blood_group == "") {
        document.getElementById("bloodgroup_ErrorId").innerHTML = "Required";
        formError = true;
    } else {
        document.getElementById("bloodgroup_ErrorId").innerHTML = "";
        formError = false;
    }


    /*Extracurricular Activities Validation */

    var checkHobbiesArr = [];
    if (document.getElementById("sports").checked) {
        checkHobbiesArr.push(document.getElementById("sports").value);
        console.log(checkHobbiesArr);


    }

    if (document.getElementById("movies").checked) {
        checkHobbiesArr.push(document.getElementById("movies").value);
        console.log(checkHobbiesArr);

    }

    if (document.getElementById("gaming").checked) {
        checkHobbiesArr.push(document.getElementById("gaming").value);
        console.log(checkHobbiesArr);

    }
    if (document.getElementById("reading").checked) {
        checkHobbiesArr.push(document.getElementById("reading").value);
        console.log(checkHobbiesArr);

    }
    if (document.getElementById("web_surfing").checked) {
        checkHobbiesArr.push(document.getElementById("web_surfing").value);
        console.log(checkHobbiesArr);

    }
    if (checkHobbiesArr == null || checkHobbiesArr == "") {

        document.getElementById("extra_active_ErrorId").innerHTML = "Selection Required";

        formError = true;
    }

    else if (checkHobbiesArr.length >= 2) {
        document.getElementById("extra_active_ErrorId").innerHTML = "";
        formError = false;

    } else {
        document.getElementById("extra_active_ErrorId").innerHTML = "Atleast 2 Activities  required";
        formError = true;
    }

    if (formError) {
        return false;
    } else {

    }


    /*After the  Submit button the details from the form are taken as a obj by the name "studobj" */

    var studobj = {
        id: new Date(),
        basic: {
            name: stud_name,
            reg_no: register_no,                                                           //key : value
            gender: document.querySelector('input[name="gender"]:checked').value,
            stud_mail: email,
            stud_phone_no: phone_no,
            stud_dob: dob,
            stud_nationality: nationality,
        },
        academic: {
            acddoj: doj,
            acdtype: acd_type,
            acddegree: acd_degree,
            acdbranch: acd_branch,
            acdyear: acd_year,
            acdsemester: acd_semester,
            acdbatch: acd_batch,

        },
        parent: {
            fathername: father_name,
            mothername: mother_name,
            fatheroccup: father_occup,
            contactno: contact_no,
            motheroccup: mother_occup,
            yearlyincome: yearly_income,
            parent_feedback: feedback,
        },
        other: {
            stud_age: age,
            studaccomadation: searchvalue,
            event: selectedProfesionArr,
            stud_blood_group: blood_group,
            hobbies: checkHobbiesArr,

        }

    };
    // / console.log(studobj)



    if (paramvalue != undefined) {
        stud.splice(paramvalue, 1, studobj);
        localStorage.setItem('student', JSON.stringify(stud));
        localStorage.setItem("form_msg", "Updated");

    } else {
        if (localStorage.getItem("student")) {                               //check whether the array is already there ?
            localStorage.setItem("form_msg", "Saved");
            studArray = JSON.parse(localStorage.getItem("student"))          // if yes! get the saved Json objcet to array   
            studArray.push(studobj);                                         // push the new obj into the array   
            localStorage.setItem('student', JSON.stringify(studArray));      // set or save into localstorage in the array   (added another)
        } else {

            studform = [];                                                     // array 
            studform.push(studobj);                                            // push the obj into array
            localStorage.setItem("form_msg", "Saved");
            localStorage.setItem('student', JSON.stringify(studform));             //set the array into local storage as string
        }
    }

    document.getElementById("stud_name").value = "";                        // use "value"            
    document.getElementById("register_no").value = "";
    document.getElementsByName("gender").value = "";
    $('input[type="radio"]').prop("checked", false);
    document.getElementById("email").value = "";
    document.getElementById("phone_no").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("nationality").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("acd_type").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("acd_degree").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("acd_branch").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("acd_year").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("acd_semester").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("acd_batch").value = "";
    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("doj").value = "";
    $('input[type="checkbox"]').prop("checked", false);

    document.getElementById("father_name").value = "";
    document.getElementById("mother_name").value = "";
    document.getElementById("contact_no").value = "";
    document.getElementById("father_occup").value = "";
    document.getElementById("mother_occup").value = "";
    document.getElementById("yearly_income").value = "";
    document.getElementById("feedback").value = "";


    document.getElementById("age").value = "";
    document.getElementById("accomadation").value = "";
    document.getElementById("event_particip").value = "";
    $('input[type="checkbox"]').prop("checked", false);

    $('input[type="checkbox"]').prop("checked", false);
    document.getElementById("blood_group").value = "";
    document.getElementsByName("checkbox").value = "";
    $('input[type="checkbox"]').prop("checked", false);

    clearFormData();
    // document.getElementById("form").reset();

    window.location.href = "add.html";

}

/* Edit  */
var url_string = window.location.href;
var url = new URL(url_string);
var paramvalue = url.searchParams.get("id");
var stud = null;
if (url.searchParams.get("id")) {
    stud = JSON.parse(localStorage.getItem("student"));
    if (null != stud && stud != "undefined") {

        var studobj = stud[paramvalue];

        document.getElementById("stud_name").value = studobj.basic.name;                       // use "value" (object to value)           
        document.getElementById("register_no").value = studobj.basic.reg_no;
        if (studobj.basic.gender == "male") {
            document.getElementById("radio1").checked = true;
        } else if (studobj.basic.gender == "female") {
            document.getElementById("radio2").checked = true;
        }
        document.getElementById("email").value = studobj.basic.stud_mail;
        document.getElementById("phone_no").value = studobj.basic.stud_phone_no;
        document.getElementById("dob").value = studobj.basic.stud_dob;
        document.getElementById("nationality").value = studobj.basic.stud_nationality;

        document.getElementById("doj").value = studobj.academic.acddoj;
        document.getElementById("acd_type").value = studobj.academic.acdtype;
        document.getElementById("acd_degree").value = studobj.academic.acddegree;
        document.getElementById("acd_branch").value = studobj.academic.acdbranch;
        document.getElementById("acd_year").value = studobj.academic.acdyear;
        document.getElementById("acd_semester").value = studobj.academic.acdsemester;
        document.getElementById("acd_batch").value = studobj.academic.acdbatch;


        document.getElementById("father_name").value = studobj.parent.fathername;
        document.getElementById("mother_name").value = studobj.parent.mothername;
        document.getElementById("contact_no").value = studobj.parent.contactno;
        document.getElementById("father_occup").value = studobj.parent.fatheroccup;
        document.getElementById("mother_occup").value = studobj.parent.motheroccup;
        document.getElementById("yearly_income").value = studobj.parent.yearlyincome;
        document.getElementById("feedback").value = studobj.parent.parent_feedback;

        document.getElementById("age").value = studobj.other.stud_age;

        document.getElementById("stud_accomadation").value = studobj.other.studaccomadation;


        var multiSelectLength = document.getElementById("event_particip").options.length;

        for (var i = 0; i < multiSelectLength; i++) {
            for (var j = 0; j < studobj.other.event.length; j++) {
                if (document.getElementById("event_particip").options[i].value == studobj.other.event[j]) {
                    document.getElementById("event_particip").options[i].selected = true;
                }
            }
        }

        document.getElementById("blood_group").value = studobj.other.stud_blood_group;

        document.getElementById("sports").checked = false;
        document.getElementById("movies").checked = false;
        document.getElementById("gaming").checked = false;
        document.getElementById("reading").checked = false;
        document.getElementById("web_surfing").checked = false;

        for (let list of studobj.other.hobbies) {
            if (list == "sports") {
                document.getElementById("sports").checked = true;
            }
            if (list == "movies") {
                document.getElementById("movies").checked = true;
            }
            if (list == "gaming") {
                document.getElementById("gaming").checked = true;
            }
            if (list == "reading") {
                document.getElementById("reading").checked = true;
            }
            if (list == " web_surfing") {
                document.getElementById("web_surfing").checked = true;
            }

        }
    }
}

function clearFormData() {
    document.getElementById("form").reset();                        // clear the form while save in local storage 

}




