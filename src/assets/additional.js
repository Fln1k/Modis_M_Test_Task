all_products_list=[{id: 1, name: 'Asus', price: 2.5, color: '#e61c1c'},
{name: 'Acer',price: 5.5, color: '#e61cb1'},
{name: 'Lenovo',price: 122.5, color: '#1c48e6'},
{name: 'Mac',price: 25.5, color: '#1ce6b7'},
{name: 'HP',price: 22.5, color: '#a11ce6'},
{name: 'Lenovo Z50',price: 120, color: '#e6701c'}
];

selected_products_list=[];

function add(){
	table_body = document.getElementById("products_table_body")
	table_body.innerHTML='';
};

function open_modal_window() {
    document.getElementById('myModal').style.display = "block";
    table = document.getElementById('all_products_table_body');
    table.innerHTML='';
    for(let i = 0; i< all_products_list.length;i++)
    {
        table.innerHTML+=`
        <tr id="all_list_`+i+`" ng-repeat="item in list.items">
            <td style="text-align: center; border: none;">`+all_products_list[i].name+`</td>
            <td style="text-align: center; border: none;">`+all_products_list[i].price+`</td>
            <td style="background-color:`+all_products_list[i].color+`; border: none;""></td>
            <td style="border: none;"><button class="btn btn-outline-secondary" onclick="selected_products_list.push(all_products_list[`+i+`]); display_items();" style=" font-size: 15px; text-align: right;text-align: center; width:100%; vertical-align: middle;">Добавить</button></td>
            <td style="border: none;"><button class="btn btn-outline-secondary" onclick="edit_product(`+i+`);" style=" font-size: 15px; text-align: right;text-align: center; width:100%; vertical-align: middle;">Редактировать</button></td>
            <td style="border: none;"><button class="btn btn-outline-secondary" onclick="all_products_list.splice(`+i+`, 1); open_modal_window(); display_items();" style=" font-size: 15px; text-align: right;text-align: center; width:100%; vertical-align: middle;">Удалить</button></td>
        </tr>`
    }
};

function edit_product(pointer){
    document.getElementById('myModal1').style.display = "block";
    document.getElementById('myModal').style.display = "none";
    document.getElementById('edit_product_text').innerHTML='Редактировать'
    document.getElementById('edit_product_name').innerHTML='<input id="edit_name" type="text" maxlength="10" style="width:100%; text-align:center; color: black;" value="'+all_products_list[pointer].name+'" placeholder="Название(максимум 10 символов)"></input>';
    document.getElementById('edit_product_price').innerHTML='<input id="edit_price" type="text" style="width:100%; text-align:center; color: black;" value="'+all_products_list[pointer].price+'" placeholder="Цена"></input>';
    document.getElementById('edit_product_color').innerHTML='<input id="edit_color" type="color" style="width:100%;" value="'+all_products_list[pointer].color+'"></input>';
    document.getElementById('edit_price').addEventListener('input', function(){
    var clearNum = this.value.match(/(\d*[.])?(\d+)?/);
    this.value = clearNum[0] ? clearNum[0] : '';
    },false);
    document.getElementById('save_edit_product').onclick = function(){
            all_products_list[pointer].name = document.getElementById('edit_name').value
            all_products_list[pointer].price = document.getElementById('edit_price').value
            all_products_list[pointer].color = document.getElementById('edit_color').value
            document.getElementById('myModal1').style.display = "none";
            open_modal_window()
            display_items()

    }
}


function create_product(){
    document.getElementById('myModal1').style.display = "block";
    document.getElementById('myModal').style.display = "none";
    document.getElementById('edit_product_text').innerHTML='Создать';
    document.getElementById('edit_product_name').innerHTML='<input id="edit_name" type="text" maxlength="10" style="width:100%; text-align:center; color: black;" placeholder="Название(максимум 10 символов)"></input>';
    document.getElementById('edit_product_price').innerHTML='<input id="edit_price" type="text" style="width:100%; text-align:center; color: black;" placeholder="Цена"></input>';
    document.getElementById('edit_product_color').innerHTML='<input id="edit_color" type="color" style="width:100%;"></input>';
    document.getElementById('edit_price').addEventListener('input', function(){
    var clearNum = this.value.match(/(\d*[.])?(\d+)?/);
    this.value = clearNum[0] ? clearNum[0] : '';
    },false);
    document.getElementById('save_edit_product').onclick = function(){
        if(edit_name.value && edit_price.value && edit_color.value)
        {
            all_products_list.push({'name': edit_name.value, 'price': edit_price.value, 'color': edit_color.value })
            document.getElementById('myModal1').style.display = "none";
            open_modal_window()  
        }
    }
}

function display_items()
{
    table = document.getElementById('products_table_body')
    table.innerHTML='';
    for(let i = 0;i<selected_products_list.length;i++){
        console.log(all_products_list.includes(selected_products_list[i]))
        if(!all_products_list.includes(selected_products_list[i]))
        {
            selected_products_list.splice(i,1);
            i--;
            continue;
        }
        table.innerHTML+=`
        <tr id="selected_list_`+i+`" ng-repeat="item in list.items">
            <td style="text-align: center; border: none;">`+selected_products_list[i].name+`</td>
            <td style="text-align: center; border: none;">`+selected_products_list[i].price+`</td>
            <td style="background-color:`+selected_products_list[i].color+`; border: none;""></td>
        </tr>`
    }
}

function close_modal_window() {
    document.getElementById('myModal').style.display = "none";
};


window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
};

function clearlist(){
	selected_products_list=[];
    document.getElementById('products_table_body').innerHTML=''
};