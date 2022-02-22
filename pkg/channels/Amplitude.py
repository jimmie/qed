# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2022 all rights reserved


# support
import qed
# superclass
from .Channel import Channel


# a channel for displaying the amplitude of complex values
class Amplitude(Channel, family="qed.channels.amplitude"):
   """
   Make a visualization pipeline to display the amplitude of complex values
   """


   # constants
   tag = "amplitude"


   # user configurable state
   min = qed.properties.float(default=None)
   min.doc = "the minimum value; anything below is underflow"

   max = qed.properties.float(default=None)
   max.doc = "the maximum value; anything above is overflow"


   # interface
   def tile(self, source, **kwds):
      """
      Generate a tile of the given characteristics
      """
      # get my range
      low = self.min
      high = self.max
      # if either is uninitialized
      if low is None or high is None:
         # extract from the dataset
         low, mean, high = source.stats()
         # adjust
         high = min(high, 4*mean)
         # and remember for next time
         self.min = low
         self.max = high

      # add my configuration and chain up
      return super().tile(source=source, min=low, max=high, **kwds)


# end of file
