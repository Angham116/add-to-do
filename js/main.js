let input = document.querySelector('.main--input');
const btn = document.querySelector('.main--btn');
const tasksList = document.querySelector('.tasksList--ul');
const listTasks = document.querySelector('.listTasks');
const important = document.querySelector('.main--input--important');
const notImportant = document.querySelector('.main--input--notImportant');
const mainHidden = document.querySelector('.main--hidden');

btn.addEventListener('click', (event) => {
	if (!input.value) { 
		emptyValueFun() ;
	} 
	else renderTasks();	
})

function renderTasks() {
	if (important.checked) {
		renderImportantTask();
	} else {
		renderNotImportantTask();
	}
	return false;
}

function emptyValueFun() {
		// console.log('jhjhghgh') ;
		mainHidden.textContent = 'Required field';
}

// , 'markBtn', 'markIcon'

function renderImportantTask() {
	mainHidden.textContent = ' ';
	const listitem = createNode(['listitem', 'deleteBtn', 'deleteIcon'], 
	['li', 'button',  'i'], 
	['li--important', 'deleteIcon', 'far']);
	listitem.listitem.textContent = input.value;
	listitem.deleteIcon.classList.add('fa-trash-alt');
	listitem.deleteBtn.appendChild(listitem.deleteIcon);
	listitem.listitem.appendChild(listitem.deleteBtn);
	tasksList.appendChild(listitem.listitem);
	input.value=' ';
	listitem.deleteBtn.addEventListener('click', (event) => {
		tasksList.removeChild(listitem.listitem);
	});
}
// <i class="far fa-edit"></i>

function renderNotImportantTask() {
	mainHidden.textContent = ' ';
	const listitem = createNode(['listitem', 'deleteBtn', 'deleteIcon'], 
	['li', 'button', 'i'], 
	['li--notImportant', 'deleteIcon', 'far']);
	listitem.listitem.textContent = input.value;
	listitem.deleteIcon.classList.add('fa-trash-alt');
	listitem.deleteBtn.appendChild(listitem.deleteIcon);
	listitem.listitem.appendChild(listitem.deleteBtn);
	tasksList.appendChild(listitem.listitem);
	input.value=' ';
	listitem.deleteBtn.addEventListener('click', (event) => {
		tasksList.removeChild(listitem.listitem);
	});
}

function emptyToggleValue() {
	mainHidden.textContent = 'Required field';
}

function createNode(NodeNames, NodeTypes, classNames) {
	if (NodeNames.length !== NodeTypes.length || NodeTypes.length !== classNames.length)
		return 'Should be the same length';
	let nodes = {};
	NodeNames.map((node, index) => {
		nodes[node] = document.createElement(NodeTypes[index]);
		nodes[node].classList.add(classNames[index]);
	});
	return nodes;
};




