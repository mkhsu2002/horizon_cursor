// 導覽列功能
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 漢堡選單切換
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 點擊導覽連結時關閉選單
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 平滑滾動到指定區塊
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 考慮固定導覽列高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 導覽列背景透明度變化
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
});

// 社群牆互動功能
function initCommunityWall() {
    const communityPosts = document.querySelectorAll('.community-post');
    
    communityPosts.forEach(post => {
        post.addEventListener('click', function() {
            // 這裡可以添加點擊社群貼文時的詳細視窗
            console.log('社群貼文被點擊');
        });
    });
}

// 商品卡片互動
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 品牌誌卡片互動
function initJournalCards() {
    const journalCards = document.querySelectorAll('.journal-card');
    
    journalCards.forEach(card => {
        card.addEventListener('click', function() {
            // 這裡可以添加點擊文章時的詳細頁面
            console.log('品牌誌文章被點擊');
        });
    });
}

// 滾動動畫效果
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll('.philosophy-card, .journal-card, .community-post, .product-card, .commitment-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// 社群牆 UGC 功能模擬
function initUGCWall() {
    // 模擬社群貼文數據
    const ugcPosts = [
        {
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
            text: '「今天帶著孩子到公園撿垃圾，教他愛護環境」',
            hashtag: '#HorizonRightThing'
        },
        {
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop',
            text: '「選擇步行上班，減少碳足跡」',
            hashtag: '#HorizonRightThing'
        },
        {
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
            text: '「週末淨灘活動，為海洋盡一份心力」',
            hashtag: '#HorizonRightThing'
        },
        {
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop',
            text: '「用環保杯取代一次性容器」',
            hashtag: '#HorizonRightThing'
        },
        {
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=300&fit=crop',
            text: '「支持在地小農，選擇有機蔬果」',
            hashtag: '#HorizonRightThing'
        },
        {
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
            text: '「分享戶外活動，鼓勵朋友走向自然」',
            hashtag: '#HorizonRightThing'
        }
    ];

    // 動態載入更多社群貼文
    const loadMorePosts = () => {
        const communityGrid = document.querySelector('.community-grid');
        if (communityGrid) {
            // 這裡可以添加載入更多貼文的功能
            console.log('載入更多社群貼文');
        }
    };

    // 每5秒更新一次社群牆（模擬即時更新）
    setInterval(loadMorePosts, 5000);
}

// 商品篩選功能
function initProductFilter() {
    // 這裡可以添加商品分類篩選功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除其他按鈕的 active 狀態
            filterButtons.forEach(b => b.classList.remove('active'));
            // 添加當前按鈕的 active 狀態
            this.classList.add('active');
            
            // 這裡可以添加篩選邏輯
            console.log('篩選商品:', this.textContent);
        });
    });
}

// 品牌誌搜尋功能
function initJournalSearch() {
    const searchInput = document.querySelector('.journal-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const journalCards = document.querySelectorAll('.journal-card');
            
            journalCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const content = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// 表單驗證
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                // 這裡可以添加表單提交邏輯
                console.log('表單驗證通過');
            }
        });
    });
}

// 載入動畫
function initLoadingAnimations() {
    // 頁面載入完成後的動畫
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initCommunityWall();
    initProductCards();
    initJournalCards();
    initScrollAnimations();
    initUGCWall();
    initProductFilter();
    initJournalSearch();
    initFormValidation();
    initLoadingAnimations();
});

// 工具函數
const utils = {
    // 防抖函數
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 節流函數
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 檢查元素是否在視窗中
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// 導出工具函數供其他腳本使用
window.HorizonUtils = utils;
