---
title: "Quiz: Next-Generation Sequencing"
sidebar_label: Chapter Quiz
description: "Check your understanding of samples and extraction, library preparation, short- and long-read sequencing, coverage and depth, and the main sequencing assays."
quiz: true
hide_table_of_contents: true
---

Test what you learned in this chapter, from a tube of blood to the choice of assay. Each answer links back to the section it comes from, and you can retake the quiz as often as you like.

<Quiz>

<Question>

A patient has leukemia, and the lab wants a matched normal sample to sequence alongside the cancer. Which source is the better choice?

<Option>A standard blood draw, since white blood cells carry the full genome</Option>
<Option correct>A small skin sample</Option>
<Option>Cell-free DNA from the blood plasma</Option>
<Option>A second piece of the cancer sample, taken on another day</Option>

<Explanation>

A matched normal carries the person's germline DNA, so variants found in both samples can be set aside, leaving the somatic ones. Blood is the usual normal, but in leukemias the blood itself carries the cancer, so the normal has to come from somewhere else, such as skin. See [Samples and Extraction](01-samples-and-extraction.md#kinds-of-samples).

</Explanation>
</Question>

<Question>

Variant calls from an FFPE tumor sample include many C-to-T changes, each in a small share of reads. What is the most likely cause?

<Option>Index hopping moved reads from another sample into this one</Option>
<Option>The paraffin wax stops the polymerase each time it reaches a cytosine</Option>
<Option correct>Formalin damage turns cytosine into uracil, which the sequencer reads as thymine</Option>
<Option>The tissue was frozen in liquid nitrogen too slowly</Option>

<Explanation>

Formalin breaks DNA and damages bases, most often turning cytosine into uracil, so FFPE data carries false C-to-T changes at low fractions. Treating the DNA with an enzyme that removes uracil cuts these down, but important low-fraction C-to-T calls are still worth confirming with a second method. See [Samples and Extraction](01-samples-and-extraction.md#keeping-dna-and-rna-intact).

</Explanation>
</Question>

<Question multiple>

Amplifying a library with PCR has costs as well as benefits. Which of these are costs of PCR?

<Option correct>Copies of the same fragment can be sequenced more than once and look like independent evidence.</Option>
<Option>Fragments without adapters get copied too, filling the library with pieces that can't be sequenced.</Option>
<Option correct>Regions very rich or very poor in G and C end up with fewer reads.</Option>
<Option correct>A mistake made in an early cycle is carried into every later copy of that fragment.</Option>
<Option>The library needs much more starting DNA than a PCR-free library.</Option>
<Option correct>Methylation marks on the original DNA are not carried over to the copies.</Option>

<Explanation>

PCR causes duplicates, GC bias, copied errors and lost chemical marks. It copies only fragments with adapters on both ends, so it actually enriches the library for pieces that can be sequenced, and it is the PCR-free libraries that need a large amount of starting DNA. See [Library Preparation](02-library-preparation.md#making-copies).

</Explanation>
</Question>

<Question>

Base quality falls toward the end of an Illumina read. What is the main reason?

<Option>The fragment ends, and the read runs into the adapter on the far side</Option>
<Option>The instrument switches to fewer dye colors in later cycles</Option>
<Option>The flow cell runs out of matching strands for fragments to stick to</Option>
<Option correct>In every cycle, a few molecules in a cluster fall out of step, so the signal blurs</Option>

<Explanation>

In each cycle, some molecules in a cluster fail to add a base or add two. The errors add up, so by later cycles each cluster's signal is a blur of neighboring positions, which is the main reason short reads stay short. Running into the adapter happens only when a fragment is shorter than the read. See [Short-Read Sequencing](03-short-read-sequencing.md#quality-scores).

</Explanation>
</Question>

<Question answer={true}>

In a 2 × 150 paired-end run, if a fragment's insert is shorter than 150 bases, both reads run past the sample's DNA into adapter sequence, and those bases should be trimmed.

<Explanation>

The reads stay the same length, but the fragments don't. A long insert leaves an unread gap between Read 1 and Read 2, a medium one makes them overlap, and an insert shorter than a read makes each read run into the adapter on the far side. Those adapter bases aren't part of the sample, so trimming tools remove them. See [Short-Read Sequencing](03-short-read-sequencing.md#paired-end-reads).

</Explanation>
</Question>

<Question multiple>

Which statements about long-read sequencing with PacBio or Oxford Nanopore are true?

<Option correct>A long read can run through a repeat into unique sequence on both sides.</Option>
<Option>Long reads cost less per base, so they are the default for most work.</Option>
<Option correct>Methylation can be detected directly, because the original molecule is read rather than a copy.</Option>
<Option>Their main errors are substitutions, just as in Illumina reads.</Option>
<Option correct>A single read can span a whole deletion, showing both breakpoints.</Option>
<Option>Nanopore reads have a fixed length, set by the number of cycles in the run.</Option>

<Explanation>

Long reads help with repeats, structural variants, phasing, whole transcripts and methylation. Short reads cost less per base and remain the default. The main long-read errors are insertions and deletions, and a nanopore read lasts as long as the molecule, with no fixed length. See [Long-Read Sequencing](04-long-read-sequencing.md#what-long-reads-are-for) and [Short Reads or Long Reads?](04-long-read-sequencing.md#short-reads-or-long-reads).

</Explanation>
</Question>

<Question>

A tumor genome is sequenced to 30x. One subclone carries a variant that appears in about 10% of reads. Why is this variant hard to call?

<Option>At 30x, about 37% of the genome gets no reads at all</Option>
<Option correct>It is expected in only about three reads, too few to tell from a sequencing error</Option>
<Option>A variant in 10% of reads looks like an inherited germline variant</Option>
<Option>Reads from a subclone are removed when duplicates are marked</Option>

<Explanation>

A real variant shows up in many reads, while an error shows up in one or two. At 30x, a variant in 10% of reads is expected in only three, so finding it takes much more depth. A germline variant from one parent should be in about half the reads, and about 37% of the genome is left unread at 1x, not 30x. See [Coverage and Depth](05-types-of-sequencing/00-introduction.md#coverage-and-depth).

</Explanation>
</Question>

<Question>

Which of these is whole-genome sequencing more likely to find than whole-exome sequencing?

<Option>A single-base change in a coding exon that the exome kit captures well</Option>
<Option>A low-fraction somatic variant present in a few percent of cells</Option>
<Option>A small indel in a protein-coding exon</Option>
<Option correct>A deletion whose breakpoints fall deep inside introns</Option>

<Explanation>

An exome reads only what it captures, so it misses noncoding variants and most structural variants, whose breakpoints usually fall outside exons. Coding SNVs and small indels are what an exome finds well, and because an exome is read more deeply, a low-fraction variant is easier to miss in a genome. See [Whole-Exome Sequencing](05-types-of-sequencing/02-whole-exome-sequencing.md#tradeoffs) and [Whole-Genome Sequencing](05-types-of-sequencing/01-whole-genome-sequencing.md#example-diagnosing-rare-disease).

</Explanation>
</Question>

<Question>

A lab has partly degraded RNA from FFPE samples and also wants to measure noncoding RNAs. Which RNA-seq library method fits best?

<Option>Poly-A selection</Option>
<Option>Skipping ribosomal RNA removal so that every RNA is kept</Option>
<Option correct>Ribosomal RNA depletion (total RNA-seq)</Option>
<Option>Hybrid capture with exome baits</Option>

<Explanation>

Ribosomal RNA depletion keeps noncoding RNAs with or without a tail, and it works better on broken RNA, where the poly-A tail may be cut off from the rest of the molecule. Ribosomal RNA is typically more than 95% of the total, so leaving it in would waste nearly every read. See [RNA-Seq](05-types-of-sequencing/03-rna-seq.md#how-the-library-is-made).

</Explanation>
</Question>

<Question answer={false}>

If a gene is newly linked to a disease, a patient's existing targeted panel data can be searched again for variants in that gene, even if the gene wasn't on the panel.

<Explanation>

A panel reads only its chosen regions, so a gene that wasn't included is invisible. An exome or genome from the same patient can be reanalyzed, but with a panel, the sample has to be sequenced again. See [Targeted Sequencing](05-types-of-sequencing/04-targeted-sequencing.md#tradeoffs).

</Explanation>
</Question>

<Question multiple>

Which statements about ChIP-seq, ATAC-seq and Hi-C are true?

<Option correct>ChIP-seq results depend on the antibody, which can grab the wrong proteins or hold the target too weakly.</Option>
<Option>ATAC-seq targets one chosen protein, just like ChIP-seq.</Option>
<Option correct>In ATAC-seq, fragment lengths show where nucleosomes sit inside an open region.</Option>
<Option>An open region in ATAC-seq data proves that the region is active.</Option>
<Option correct>In Hi-C, the two reads of a pair can land millions of bases apart, or on different chromosomes.</Option>

<Explanation>

In all three assays, where reads land matters more than their sequence. A ChIP-seq experiment is only as good as its antibody. ATAC-seq shows every open region at once, not one protein, and open isn't the same as active. In Hi-C, the two reads come from either side of a join between pieces that touched in the nucleus. See [ChIP-Seq](05-types-of-sequencing/05-chip-seq.md#choosing-the-antibody), [ATAC-Seq](05-types-of-sequencing/06-atac-seq.md#depth-and-read-setup) and [Hi-C](05-types-of-sequencing/07-hi-c.md#how-the-library-is-made).

</Explanation>
</Question>

<Question>

In droplet single-cell RNA-seq, two reads carry the same cell barcode, the same UMI, and come from the same gene. How are they counted?

<Option>As two molecules of that gene in one cell</Option>
<Option>As one molecule in each of two different cells</Option>
<Option>As a doublet, so the cell is removed</Option>
<Option correct>As one molecule of that gene in one cell</Option>

<Explanation>

The cell barcode is the same on every strand of a bead, so it tells which cell a read came from. The UMI is different on every strand and marks each original molecule, so reads with the same UMI are copies of one molecule and are counted once. A doublet is a droplet that caught two cells, which is a different problem. See [Single-Cell Sequencing](05-types-of-sequencing/08-single-cell-sequencing.md#how-the-library-is-made).

</Explanation>
</Question>

</Quiz>
