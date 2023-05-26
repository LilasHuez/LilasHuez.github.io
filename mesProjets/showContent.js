const showContent = {
    init: function() {
      const categoryMenuItems = document.querySelectorAll('.category-menu-item');
      categoryMenuItems.forEach(item => {
        item.addEventListener('click', this.handleCategoryClick);
      });
    },
  
    handleCategoryClick: function(event) {
      const category = event.target.dataset.category;
      showContent.hideAllContent();
      showContent.showCategoryContent(category);
    },
  
    hideAllContent: function() {
      const contentContainers = document.querySelectorAll('.content-container');
      contentContainers.forEach(container => {
        container.classList.add('hidden');
      });
    },
  
    showCategoryContent: function(category) {
      const selectedContentContainer = document.getElementById(category + '-content');
      selectedContentContainer.classList.remove('hidden');
    }
  };
  
  // Initialize the showContent object
  showContent.init();