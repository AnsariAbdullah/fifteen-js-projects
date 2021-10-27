let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
	// console.log(btn )
	btn.addEventListener('click', function(e){
		
		const styles = e.currentTarget.classList;

		// perform increament or decreament or resetting
		if(styles.contains('decrease')){
			count--;
		}else if(styles.contains('increase')){
			count++;
		}else{
			count=0;
		}

		// change color
		if(count > 0){
			value.style.color = 'green';
		}
		if(count < 0){
			value.style.color = 'red';
		}
		if(count == 0){
			value.style.color = '#222';
		}
		value.textContent = count;
	})
})