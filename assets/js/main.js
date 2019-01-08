/**
 * Created by Carl Cr on 08/06/2018.
 */
 var x='<span class="glyphicon glyphicon-trash"></span>';
 var ok='<span class="glyphicon glyphicon-ok-circle"></span>';
 document.getElementById('add').addEventListener('click',function()
 {
     var valor=document.getElementById('item').value;
     if(valor)
     {
         addItensTodo(valor)
     }
 });
function removeItem()
{
    var item=this.parentNode.parentNode;
    var parent=item.parentNode;
    var id=parent.id;
    var alvo=(id === 'todo')? document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);
    alvo.insertBefore(item, alvo.childNodes[0]);
}

function completeItem()
{
    var item=this.parentNode.parentNode;
    var parent=item.parentNode;
    parent.removeChild(item);
}

//adicionando um novo elemento para lista
function addItensTodo(text)
{
    var list=document.getElementById('todo');
    var item=document.createElement('li');
    item.innerText=text;

    var buttons=document.createElement('div');
    buttons.classList.add('buttons');

    var remove=document.createElement('button');
    remove.classList.add('complete');
    remove.innerHTML=ok;

    //adicionando codigo para remover item

    remove.addEventListener('click',removeItem);

    var complete=document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML=x;

    //adicionar evento click para complet item
    complete.addEventListener('click',completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.children[0]);

}