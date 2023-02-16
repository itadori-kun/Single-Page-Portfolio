const left = document.getElementById('leftBtn')
const right = document.getElementById('rightBtn')

left.addEventListener('click', function slideLeft () {
    const wrapper = document.getElementById( 'wrapper' );
  wrapper.scrollLeft = wrapper.scrollLeft - 540
})
right.addEventListener('click', function slideRight () {
    const wrapper = document.getElementById( 'wrapper' );
  wrapper.scrollLeft = wrapper.scrollLeft + 540
})
