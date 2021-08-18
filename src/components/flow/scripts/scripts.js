 ((d) => {

    /**
     * Access drag element
     */
    const draggableElements = d.querySelectorAll('.myDraggableElement');

    for (const dragItem of draggableElements) {

         /**
     * Eventlistener for drage element
     */
          dragItem.addEventListener('dragstart', e => {
    
        /**
         * Set data to draggableElement.id, with a mime type of text
         * 
         * This is so the drag event keeps hold of the id
         */
        e.dataTransfer.setData('text/plain', dragItem.id);
    });

    }

    for (const dropZone of d.querySelectorAll('.drop-zone')) {

        /**
         * When draggle element is over a drop zone
         */
        dropZone.addEventListener('dragover', e => {

            e.preventDefault();
            dropZone.classList.add('drop-zone--over');
        });

        /**
         * When draggable element is no longer over the drop zone
         */
        dropZone.addEventListener('dragleave', e => {

            e.preventDefault();
            dropZone.classList.remove('drop-zone--over');
        });

        /**
         * When draggable element is dropped onto a drop zone
         */
        dropZone.addEventListener('drop', e => {

            /**
             * Prevent default behaviour of opening dropped item
             * in a new tab
             */
            e.preventDefault();
            dropZone.classList.add('drop-zone--over');
            
            const droppedElementId = e.dataTransfer.getData('text/plain');
            const droppedElement = d.getElementById(droppedElementId);

            /**
             * Add dragged element to dropped zone
             */
            dropZone.appendChild(droppedElement);
            dropZone.classList.remove('drop-zone--over'); 
        });
    }

 
})(document)