// import React from 'react';

// export default function Home() {
//   return (
//     <div className='home-container'>
//       <h2 className='heading1'>Welcome to the Sorting and Optimal Binary Search Tree Visualizer!</h2>
//       <img src={require('./bar.png')} alt='Sorting Visualizer' className='left-image' />
//       <p>
//         Are you curious about how sorting algorithms work? Do you want to see them in action and understand their efficiency?
//         Look no further! Our Sorting Visualizer provides an interactive and educational experience that allows you to visualize
//         how different sorting algorithms sort data in real-time. Are you fascinated by data structures and the efficiency of search algorithms? Delve into the world of Optimal Binary Search Trees
//         with our interactive visualizer! Witness how optimal BSTs are constructed, allowing for faster and more efficient search operations.
//       </p>

//       <h2>Key Features of Sorting Visualizer:</h2>
//       <ol>
//         <li></li>
//         <li><strong>:</strong> Control the visualization speed to observe the sorting process at your preferred pace.</li>
//         <li><strong>:</strong> Choose the size of the data set you want to sort, from small to large, to see how algorithms perform on different data volumes.</li>
//         <li><strong>:</strong> Gain valuable insights into each sorting algorithm's time complexity and best-case/worst-case scenarios.</li>
//         <li><strong>:</strong> Access helpful articles and tutorials on sorting algorithms to deepen your understanding.</li>
//       </ol>
//       <h2>Why Use Our Optimal BST Visualizer?</h2>
//       <ul>
//          <li><strong>Visual Learning:</strong> Experience the step-by-step construction of optimal BSTs, making complex concepts more accessible.</li>
//          <li><strong>Efficiency at its Best:</strong> Discover how optimal BSTs can significantly improve search times compared to regular BSTs.</li>
//          <li><strong>Customizable Node Frequencies:</strong> Play with different node frequencies to understand how they affect the overall structure of the optimal BST.</li>
//          <li><strong>Real-time Visualization:</strong> Observe the effects of inserting nodes and balancing the tree in real-time.</li>
//        </ul>
//        <img src={require('./tree1.jpg')} alt='Optimal BST Visualizer' className='right-image' />
//       <h2>Key Features of Optimal BST Visualizer:</h2>
//       <ol>
//         <li><strong>Interactive Construction:</strong> See how optimal BSTs are built by dynamically adjusting node frequencies and balancing the tree.</li>         
//         <li><strong>Node Frequency Customization:</strong> Customize node frequencies to create scenarios that mimic real-world data, such as word frequencies in a text.</li>
//         <li><strong>Visual Clarity:</strong> Each step of the construction process is presented visually, making it easier to grasp the algorithm's inner workings.</li>
//         <li><strong>Search Efficiency Comparison:</strong> Compare search times between regular BSTs and optimal BSTs with varying datasets.</li>
//         <li><strong>Educational Resources:</strong> Access insightful articles and explanations on optimal BSTs and their applications.</li>
//       </ol>
//       <div className="cta-container">
//         <button className='get-started-button'>Get Started Now</button>
//       </div>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className='home-container'>     
        <div className='intro'>
          {/* <div class="image1">
            <img src={require('./barimg1.png')} alt='Sorting Visualizer' className='left-img' />
          </div> */}
          <h2 className='heading1'>Welcome to the Sorting and Optimal Binary Search Tree Visualizer!</h2>
          <p className='p2'>
            Are you curious about how sorting algorithms work? Do you want to see them in action and understand their efficiency?<br></br>
            Our Sorting Visualizer provides an interactive and educational experience that allows you to visualize
            how different sorting algorithms sort data in real-time. Are you fascinated by data structures and the efficiency of search algorithms? Delve into the world of Optimal Binary Search Trees
            with our interactive visualizer! Witness how optimal BSTs are constructed, allowing for faster and more efficient search operations.
          </p>
       </div>
      <section class="articles">

        <article>
          <div class="article-wrapper">
            <figure>
              <img src={require('./v1_e.gif')} alt="img" />
            </figure>
            <div class="article-body">
              <h2>Visualizer</h2>
              <p>
                Multiple Sorting Algorithms<br></br> We offer a variety of sorting algorithms, including Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and more!  
                Adjustable Speed, Data Size Customization, Algorithm Insights, Educational Resources      
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={require('./barg.gif')} alt="barimg" />
            </figure>
            <div class="article-body">
              <h2>Sorting Visualizer</h2>
              <p>
              Multiple Sorting Algorithms<br></br> We offer a variety of sorting algorithms, including Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and more!  
                Adjustable Speed, Data Size Customization, Algorithm Insights, Educational Resources  
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={require('./treeg2.gif')} alt="" />
            </figure>
            <div class="article-body">
              <h2>Weighted BST</h2>
              <p>
              Experience the step-by-step construction of optimal BSTs<br></br> Node Frequency Customization, Interactive Construction ,Visual Clarity, Search Efficiency Comparison
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

