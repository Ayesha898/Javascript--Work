function AddInput()
                    {
                        const inputcontainer = document.getElementById("input-container");
                        const newInputdiv = document.createElement("div");
                        newInputdiv.innerHTML = `
                        <label for="Name" class="name1">Name:</label>
                        <input type="text" placeholder="Name Here.." class="input">
                        <label for="Degree" class="name2">Degree:</label>
                        <input type="text" placeholder="Degree Title Here.." class="input">
                        <label for="CGPA" class="name3">CGPA:</label>
                    <input type="text" placeholder="CGPA Here.." class="input">
                    <button onclick="removeInput(this)" class="btn1" >Remove</button>
                        `;
                        inputcontainer.appendChild(newInputdiv);    
                    }
                    function removeInput(button){
                        const inputcontainer = document.getElementById("input-container");
                        const divToRemove = button.parentElement;
                        inputcontainer.removeChild(divToRemove);
                    }


