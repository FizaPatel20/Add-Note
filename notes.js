const addBtn = document.querySelector("#addbtn")

const main = document.querySelector("#main")

const savenotes = () => {
    const notes = document.querySelectorAll(".note textarea")
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

addBtn.addEventListener(
    "click",
    function () {
        addnote()
    }
)

const addnote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = ` 
    <div class="tool">
          <img class="save" src="save.jpg">
         <img class="trash" src="trash.jpg" alt="">
        </div>

        <textarea name="" id="">${text}</textarea>
        `;
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove();
            savenotes()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function () {
            savenotes()
        }
    )

    main.appendChild(note)
}

(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes === null) {
            addnote()
        } else {
            lsnotes.forEach(
                (lsnotes) => {
                    addnote(lsnotes)
                }
            )
        }

        if (lsnotes.length == 0) {
            localStorage.removeItem("notes")
        }
        else {
            addnote()
        }
    }
)()