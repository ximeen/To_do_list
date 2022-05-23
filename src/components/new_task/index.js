import './main.scss'


export function NewTask(){

    const MAIN = document.querySelector("#MAIN");
    MAIN.innerHTML= `
        <div class="main__container">
            <div class="main__NewTask">
                <label class="main__LabelInput" for ="main__input"> Um campo para digitação das tarefas </label>
                <input type="text" placeholder="Digite sua tarefa" class="main__input" id="text_input"/>

                <button class="main__ButtonPush" id="push"> Adicionar </button>
            </div>

            <div class ="main__Task" id="task"></div>
        </div>
    `

      
        // Pegando meu button de inserção das task
        const BUTTON_SUBMIT = document.querySelector("#push");
        // adicionando um evento de click e rodando uma função
        BUTTON_SUBMIT.addEventListener('click', (e)=>{
            e.preventDefault();
            // Pegando o valor do meu input
            const TEXT_INPUT = document.querySelector("#text_input");
            const TEXT_VALUE = TEXT_INPUT.value;
            // pegando a div que será colocada as minhas tasks
            const TASKS = document.querySelector("#task");
        
        // validando se no campo tem algum valor, se não tiver vai gerar um alerta pra preencher o campo
            if(TEXT_VALUE.length == 0){
                alert("Por favor preencha o campo de tarefas!");
            }else{
                // Se tiver a gente vai inserir naquela div esse HTML abaixo e o valor que o user digitou no input
                TASKS.innerHTML += `
                    <div class="main__Tasks">
                        <span class="main__TaskName"> ${TEXT_VALUE} </span>
                        <button class="main__delete" id="delete"><i class='bx bx-trash-alt'></i></button>
                    </div>
                `;

                let BUTTON_DELETE = document.querySelectorAll(".main__delete");

                for(let i=0; i<BUTTON_DELETE.length; i++){
                    BUTTON_DELETE[i].onclick = function(){
                        this.parentNode.remove();
                    }
                }

                let TASK_COMPLETED = document.querySelectorAll(".main__Tasks");
                for(let i=0; i<TASK_COMPLETED.length; i++){
                    TASK_COMPLETED[i].onclick = function(){
                        this.classList.toggle("main__Completed")
                    }
                }

                // localStorage.setItem(`${} `, `${TEXT_VALUE}`)
            }
            
        });

       


}