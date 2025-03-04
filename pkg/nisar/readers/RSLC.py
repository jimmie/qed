# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2022 all rights reserved


# support
import qed


# the RSLC reader
class RSLC(qed.readers.h5, family="qed.nisar.readers.rslc"):
    """
    The reader of RSLC files
    """


    # public data
    # my selectors
    selectors = qed.protocols.selectors()
    selectors.doc = "a map of selector names to their allowed values"
    # the full set of allowed values
    selectors.default = {
        "band": ["L", "S"],
        "frequency": ["A", "B"],
        "polarization": ["HH", "HV", "VH", "VV"],
    }


    # metamethods
    def __init__(self, **kwds):
        # chain up
        super().__init__(**kwds)

        # grab my file
        d = self.h5
        # get my tag
        tag = self.tag
        # alias my constants
        DATASET = self.DATASET
        FREQUENCIES = self.FREQUENCIES
        POLARIZATIONS = self.POLARIZATIONS

        for band in self.selectors["band"]:
            # attempt to
            try:
                # get the list of frequencies for this band
                frequencies = d.dataset(FREQUENCIES.format(band=band)).strings()
            # if anything goes wrong
            except Exception:
                # move on
                continue

            # go through them
            for frequency in frequencies:
                # attempt
                try:
                    # form the group name with the list polarizations
                    polGrp = POLARIZATIONS.format(band=band, tag=tag, freq=frequency)
                    # get the list of polarizations
                    polarizations = d.dataset(polGrp).strings()
                # if anything goes wrong
                except Exception:
                    # move on
                    continue
                # go through them
                for polarization in polarizations:
                    # attempt
                    try:
                        # form the name of the dataset
                        dName = DATASET.format(band=band, tag=tag, freq=frequency, pol=polarization)
                        # get the HDF5 dataset
                        data = d.dataset(dName)
                    # if anything goes wrong
                    except Exception:
                        # move on
                        continue
                    # generate a {pyre} name for the dataset
                    name = f"{self.pyre_name}.{band}.{frequency}.{polarization}"
                    # build its selector table
                    selector = {
                        "band": band,
                        "frequency": frequency,
                        "polarization": polarization,
                    }
                    # pack its configuration
                    config = {
                        "uri": self.uri,
                        "shape": data.shape,
                        "selector": selector,
                    }
                    # instantiate it
                    slc = qed.nisar.datasets.slc(name=name, data=data, **config)
                    # and add it to my dataset
                    self.datasets.append(slc)

        # all done
        return


    # constants
    # constants
    # NISAR RSLCs are not tagged correctly
    tag = "SLC"

    # layout
    DATASET = "/science/{band}SAR/{tag}/swaths/frequency{freq}/{pol}"
    FREQUENCIES = "/science/{band}SAR/identification/listOfFrequencies"
    POLARIZATIONS = "/science/{band}SAR/{tag}/swaths/frequency{freq}/listOfPolarizations"


# end of file
