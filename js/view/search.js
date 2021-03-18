var search = new Vue({
  el : "#searchPage",
  data : {
    books : [
      {
        title : "From Across the Room",
        author : "Gina L. Mulligan",
        synopsis : `Read the book that inspired the national charity Girls Love Mail. Self-indulgent young writer Thomas Gadwell has traveled from Boston to the new Hotel Del Coronado in California to at last finish his novel when he meets the clever and headstrong Miss Mary Harting. At once Thomas tosses aside his literary pursuits for a charmed summer of romance that ends with the happy couple making future plans. However, Mary Harting is the only unmarried daughter of notorious railroad tycoon Charles Harting, and he has no intention of letting a useless wordsmith derail his own critical plans for Mary. The couple must continue a clandestine courtship, but Thomas' ingenuity has unexpected repercussions and he unwittingly uncovers a sinister plot of deception, greed, and blackmail. To win Mary, Thomas must step from the pages of the world he creates to explore his own insecurities, battle against worldly corruption, and expose family demons.

        Told through a series of clever, heartfelt, and engaging letters, From Across the Room is a voyeuristic escapade that delights at every twist. Reflecting back to a time when letters were saved in the imagination of the reader, the lost art of letter writing brings to life the opulent Gilded Age and unfolds the universal passions of love, ambition, and the resilient bonds of family.`,
        id : 3,
        extension : ".jpg",
        rating : "5.0",
        ratingCount : 3,
        soldCount : 13,
      },
      {
        title : "From Silicon Valley to Swaziland",
        author : "Rick & Wendy Walleigh",
        synopsis : `What do you do when you're ready to retire from a successful career in Silicon Valley? Why not move to Africa and do volunteer work?

        Okay, this isn't the way most of us imagine spending our golden years. But Rick and Wendy Walleigh -- like so many baby boomers reaching the traditional age of retirement -- were too healthy, motivated, and interested in giving back to play golf for the rest of their lives. From Silicon Valley to Swaziland describes their experiences, from the challenges of day-to-day existence in an unfamiliar culture to the joys of helping people in poverty grow their own businesses. If you're thinking about transitioning to a more meaningful career, you'll find the Walleighs' story both informative and inspiring.
        
        Sample Reviews:
        
        “An incredibly insightful book into sustainable development… A great read.”
        
        “Well written, easy read. The real value in this book is in the basic premise: We all can make the world a better place.”
        
        “Great book about a couple who decide to make a difference in Africa.”
        
        “For those seeking an encore to their professional lives, Rick Walleigh’s account of the adventure that he and his wife Wendy, began is as energizing as it is useful.”
        
        “If you are nearing the end of your business career and wondering what’s next, you’ll find Rick and Wendy’s experience both illuminating and inspiring.”`,
        id : 5,
        extension : ".jpg",
        rating : "5.0",
        ratingCount : 14,
        soldCount : 23,
      },
      {
        title : "Beach Town Apocalypse",
        author : "Thomas Maxwell Harrison",
        synopsis : `A mysterious disease has struck a hit and run victim.

        After Officer Dean begins the investigation it becomes clear the disease is the beginning of an epidemic.
        
        Harry and his family live a modest suburban life in Beach Town, on an island Southwest of the UK. He is dissatisfied with his marriage when he agrees to take his best friend Sheila to a job interview.
        
        Stuck in traffic on the motorway, strange events begin to unfold, and Harry and Sheila are forced to the hospital hoping to find his family when chaos ensues.
        
        They encounter Charlie and together they must survive an attack of significant proportions.
        
        Whilst the dead are quarantined, Harry knows it can’t be contained and the town is a day from a total apocalypse.
        
        Witness four horrific journeys as the dead rise. In a desperate race for survival Harry will discover the brutal lengths he'll need to go to in order to keep his family from certain death.`,
        id : 7,
        extension : ".jpeg",
        rating : "4.0",
        ratingCount : 5,
        soldCount : 56,
      }
    ],
  },
  filters : {
    ebookCoverURL : function(value, extension) {
      return "https://mnaufalmuafa.github.io/vervays.github.io/asset/image/book_cover/"+value+""+extension;
    },
    fifthStarURL : function(rating) {
      if (rating === "5.0") {
        return "asset/ikon/yellow_star.png";
      }
      else {
        return "asset/ikon/blank_star.png";
      }
    }
  },
});
