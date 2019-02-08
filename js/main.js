let input = document.querySelector('.main--input');
const btn = document.querySelector('.main--btn');
const tasksList = document.querySelector('.tasksList--ul');
const listTasks = document.querySelector('.listTasks');
const urgent = document.querySelector('.main--input--urgent');
const notUrgent = document.querySelector('.main--input--notUrgent');
const important = document.querySelector('.main--input--important');
const notImportant = document.querySelector('.main--input--notImportant');

// const selectors = querySelectors(
// 	['tasksListUl', 'listTasks',
// 	'urgent', 'notUrgent', 'important', 'notImportant'], 
// 	['.tasksList--ul', '.main--input--urgent', '.main--input--notUrgent',
// 	'.main--input--important', '.main--input--notImportant']
// );

// let query = input.value;

btn.addEventListener('click', (event) => {
	if (!input.value) { 
		// console.log('Empty')
		emptyValueFun() ;
	} 
	else renderTasks();
	
})

// function renderTasks() {
// 	if (selectors.urgent.checked) {
// 		renderUrgentTask();
// 	} else if (selectors.notUrgent.checked) {
// 		renderNotUrgentTask();
// 	} else if (selectors.important.checked) {
// 		renderImportantTask();
// 	} else {
// 		renderNotImportantTask();
// 	}
// 	return false;
// }

function renderTasks() {
	if (urgent.checked) {
		renderUrgentTask();
	} else if (notUrgent.checked) {
		renderNotUrgentTask();
	} else if (important.checked) {
		renderImportantTask();
	} else {
		renderNotImportantTask();
	}
	return false;
}

function emptyValueFun() { 
		// selectors.listTasks.innerHTML = ' ';
		listTasks.innerHTML = ' ';
		const {emptyValue} = createNode(['emptyValue'], ['p'], ['emptyValue']);
		emptyValue.textContent = 'Required field';
		// console.log('oooiu')
		// selectors.listTasks.appendChild(emptyValue);
		listTasks.appendChild(emptyValue);	
}

function renderUrgentTask() {
	// console.log('renderUrgentTask')
	input.value=' ';
	// selectors.urgent.checked = false;
	urgent.checked = false;
	const listitem = createNode(['listitem', 'deleteIcon'], ['li', 'i'], ['li--argent', 'fa-delete']);
	// console.log(input);
	// selectors.listitem.textContent = input.value;
	listitem.listitem.textContent = input.value;
	listitem.listitem.appendChild(listitem.deleteIcon);
	tasksList.appendChild(listitem.listitem);
	// console.log('kjhgfd')

}

function renderNotUrgentTask() {
	// console.log('notttt');
	input.value=' ';
	// selectors.notUrgent.checked = false;
	notUrgent.checked = false;
	const listitem = createNode(['listitem', 'deleteIcon'], ['li', 'i'], ['li--notArgent', 'fa-delete']);
	// console.log(listitem);
	listitem.listitem.textContent = input.value;
	listitem.listitem.appendChild(listitem.deleteIcon);
	tasksList.appendChild(listitem.listitem);
	// console.log('kjhgfd')
}


function renderImportantTask() {
	// console.log('notttt');
	input.value=' ';
	// selectors.important.checked = false;
	important.checked = false;
	const listitem = createNode(['listitem', 'deleteIcon'], ['li', 'i'], ['li--important', 'fa-delete']);
	// console.log(listitem);
	listitem.listitem.textContent = input.value;
	listitem.listitem.appendChild(listitem.deleteIcon);
	tasksList.appendChild(listitem.listitem);
	// console.log('kjhgfd')
}

function renderNotImportantTask() {
	// console.log('notttt');
	input.value=' ';
	// selectors.notImportant.checked = false;
	notImportant.checked = false;
	const listitem = createNode(['listitem', 'deleteIcon'], ['li', 'i'], ['li--notImportant', 'fa-delete']);
	// console.log(listitem);
	listitem.listitem.textContent = input.value;
	listitem.listitem.appendChild(listitem.deleteIcon);
	tasksList.appendChild(listitem.listitem);
	// console.log('kjhgfd')
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

// function querySelectors(ElementNames, selectors) {
// 	if (ElementNames.length !== selectors.length) return 'Should be the same length';
// 	let elements = {};
// 	ElementNames.map((element, index) => elements[element] = document.querySelector(selectors[index]));
// 	return elements;
// };




