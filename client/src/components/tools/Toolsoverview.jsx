import React from 'react'
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faChartBar } from '@fortawesome/free-solid-svg-icons';
// import { faBroom } from '@fortawesome/free-solid-svg-icons';

export default function Toolsoverview() {
  return (
    <div className='m-2'>
    <div className='container-fluid mb-2'>
    <div className='toolscont'>
   
   <h2 className='text-center text-black p-1'> Tools</h2>
  
    <div className='toolsbox  row justify-content-center'>
        <Link to='/grammar' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i className='fas fa-spell-check fa-4x mx-4 my-auto'></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title  font-weight-bold" >Grammar Checker</h5></div></div>
    </div>
    </Link>

    <Link to='/analysistool' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i className='fas fa-search fa-4x mx-4 my-auto'></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title font-weight-bold" >Text Analyzer</h5></div></div>
    </div>
    </Link>
    <Link to='/datacleaning' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i className='fas fa-broom fa-4x mx-4 my-auto'></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title font-weight-bold" >Corpus Cleaner</h5></div></div>
    </div>
    </Link>
    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i className='fas fa-server fa-4x mx-4 my-auto'></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title font-weight-bold" >Corpus Hosting</h5></div></div>
    </div>
    </Link>
   
    </div>
    </div>
    </div>
    <div className='pushd'>
    <h3 className=' mt-2 explaniationbox text-center'>
        What are These Tools?
    </h3>

    <div className='container'>
  

    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Grammar Checker</h3>
            <p className="ml-3">A grammar checker tool is used to help identify and correct grammatical errors in written text. This can include issues such as punctuation errors, subject-verb agreement, and word choice. This tool also provide suggestions for improving sentence structure and readability.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
  <div className='d-flex h-100 align-baseline justify-content-center'>
    <i className='fas fa-spell-check fa-10x mx-4 my-auto'></i>
  </div>


        </div>
     
    </div>

    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Text Analyzer</h3>
            <p className="ml-3">This text analyzer tool can help a client to quickly and easily gather statistics about a given text, which can be useful in a variety of contexts, such as writing, editing, or research.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
  <div className='d-flex h-100 align-baseline justify-content-center'>
    <i className='fas fa-search fa-10x mx-4 my-auto'></i>
  </div>
</div>

     
    </div>
    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Corpus Cleaner</h3>
            <p className="ml-3">The purpose of data cleaning is to improve data quality by identifying and fixing errors, inconsistencies, and inaccuracies in the data. Clean data is important for accurate analysis and modeling.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
  <div className='d-flex h-100 align-baseline justify-content-center'>
    <i className='fas fa-broom fa-10x mx-4 my-auto'></i>
  </div>
</div>

     
    </div>
    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Corpus Hosting</h3>
            <p className="ml-3">A corpus hosting tool is a platform that allows users to store, manage, and access large collections of text data, known as corpora, for use in natural language processing and other language-related research.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
  <div className='d-flex h-100 align-baseline justify-content-center'>
    <i className='fas fa-server fa-10x mx-4 my-auto'></i>
  </div>
</div>

     
    </div>

    {/* copy  the above div after filling it and change content*/}

    </div>


    </div>
    </div>

  )
}
