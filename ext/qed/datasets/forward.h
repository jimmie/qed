// -*- c++ -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved

// code guard
#if !defined(qed_py_forward_h)
#define qed_py_forward_h


// the {datasets} namespace
namespace qed::py::datasets {
    // the subpackage intializaer
    void datasets(py::module &);

    // interface
    // sample a dataset along a path
    void profile(py::module &);
    // compute simple statistics on a sample of a dataset
    void stats(py::module &);
}


#endif

// end of file
