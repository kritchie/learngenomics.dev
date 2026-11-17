---
title: Final Quiz
description: "Twelve questions that follow ideas across the whole guide, from a change in a cell's DNA to how it shows up in reads, calls and files."
quiz: true
hide_table_of_contents: true
---

This quiz draws on the whole guide. Each question combines ideas from two or more
chapters, and each explanation links back to the pages it uses, so you can reread any
section you missed. You can retake the quiz as often as you like.

<Quiz>

<Question>

A tumor carries a deletion of two bases inside the coding sequence of a tumor suppressor gene. Which description fits this change best?

<Option>An in-frame deletion that removes one amino acid and leaves the rest of the protein as it was.</Option>
<Option correct>A frameshift that usually brings in a stop codon soon after it; for most tumor suppressors, the cell must also lose the other copy to escape the gene's control.</Option>
<Option>A gain-of-function change that switches the protein on, so a change in one of the two copies is enough to push the cell to grow.</Option>
<Option>A synonymous change, because the ribosome reads three bases at a time and skips over the gap.</Option>

<Explanation>

Two is not a multiple of three, so every codon after the deletion is read in a different frame, and a stop codon usually turns up soon, as with *BRCA1* 185delAG. Tumor suppressors help a tumor when they lose function, and for most of them one working copy is enough, so both copies must be lost. See [Reading Frames](01-biological-foundations/04-translation.md#reading-frames), [Indels in Genes](03-genomic-variation/03-insertions-and-deletions.md#indels-in-genes) and [Tumor Suppressors](02-cancer-biology/03-oncogenes-and-tumor-suppressors.md#tumor-suppressors).

</Explanation>
</Question>

<Question multiple>

On `chr1`, positions 101 to 109 of the reference read `ACAGCCATA`. A sample reads `ACAATA`: it has lost the `GCC` at positions 104 to 106. Which statements are correct?

<Option>Because three bases are lost, every codon after the deletion is read in a different frame.</Option>
<Option correct>In a VCF file, the deletion is written with `POS` 103, `REF` `AGCC` and `ALT` `A`.</Option>
<Option>In a VCF file, the deletion is written with `POS` 104, `REF` `GCC` and an empty `ALT`.</Option>
<Option correct>As a BED line, the three deleted bases are `chr1 103 106`.</Option>
<Option>As a BED line, the three deleted bases are `chr1 104 106`.</Option>

<Explanation>

VCF writes an indel with the shared base just before it, so neither REF nor ALT is empty, and POS points to that base, here the `A` at 103. BED uses interbase coordinates, so bases 104 to 106 start at gap 103 and end at gap 106 (`chr1 104 106` would hold only two bases). Three is a multiple of three, so the deletion is in-frame. See [Describing and Finding Indels](03-genomic-variation/03-insertions-and-deletions.md#describing-and-finding-indels), [Writing Indels](06-genomic-file-formats/04-VCF-files.md#writing-indels), [In-Base and Interbase Coordinates](06-genomic-file-formats/05-BED-files.md#in-base-and-interbase-coordinates) and [Indels in Genes](03-genomic-variation/03-insertions-and-deletions.md#indels-in-genes).

</Explanation>
</Question>

<Question>

A patient carries an SNV in an exon that is synonymous: the new codon codes for the same amino acid. RNA-seq from the patient shows many reads that run from the exon before it straight into the exon after it, leaving out the exon with the SNV. What is the best reading of this?

<Option>A synonymous SNV can't change the protein, so these reads must be mistakes made by aligning RNA reads like DNA.</Option>
<Option correct>The SNV likely changed a splicing signal, such as a splicing enhancer, so the spliceosome skips the exon; a splice-aware aligner maps each of these reads in two pieces.</Option>
<Option>The SNV must have made a stop codon, and nonsense-mediated decay removed the exon from the mRNA.</Option>
<Option>The exon must have been deleted from the patient's DNA, because a single-base change can't make the cell leave out a whole exon.</Option>

<Explanation>

Synonymous variants are usually harmless, but they can affect splicing: in *SMN2*, a C-to-T change that keeps the amino acid weakens a splicing enhancer and makes the spliceosome skip exon 7. A read that crosses from one exon to the next is mapped in two pieces by a splice-aware aligner such as `STAR`. See [Decoding the Transcript](01-biological-foundations/04-translation.md#decoding-the-transcript), [What an SNV Can Do](03-genomic-variation/02-single-nucleotide-variation.md#what-an-snv-can-do), [When Splicing Goes Wrong](07-advanced-topics/alternative-splicing.md#when-splicing-goes-wrong), [Seeing It in Data](07-advanced-topics/alternative-splicing.md#seeing-it-in-data) and [How an Aligner Works](05-from-reads-to-variants/02-read-mapping.md#how-an-aligner-works).

</Explanation>
</Question>

<Question>

A patient with Li-Fraumeni syndrome carries an inherited *TP53* variant. In the matched normal, about 50% of reads at that position show it. In a tumor sample that is 60% tumor, about 80% of reads show it, and read depth across the region looks the same as in the rest of the genome. What best explains this?

<Option>The tumor amplified the copy with the variant many times over.</Option>
<Option>The tumor lost both copies of *TP53* through a homozygous deletion.</Option>
<Option correct>The tumor cells lost the working copy and duplicated the copy with the variant, a copy-neutral loss of heterozygosity.</Option>
<Option>The variant arose in only a subclone of the tumor, after the cancer started.</Option>

<Explanation>

In copy-neutral LOH, a cell loses one copy and copies the other, so depth stays normal but every read from a tumor cell shows the variant: in a 60% tumor sample, about 80% of all reads do. An amplification would raise depth and a deletion would lower it, and a variant seen in the matched normal is germline, not a subclone. See [The Second Hit](02-cancer-biology/06-inherited-risk.md#the-second-hit), [Allele Fractions](03-genomic-variation/05-copy-number-variation.md#allele-fractions) and [Read Depth](03-genomic-variation/05-copy-number-variation.md#read-depth).

</Explanation>
</Question>

<Question>

A tumor sample is 60% tumor and is sequenced by whole-genome sequencing to 30x. A mutation sits on one of two copies of a chromosome, in a subclone that holds one third of the cancer cells. About what share of reads will show it, and what does that mean?

<Option correct>About 10%, or about three of 30 reads, which is too few to tell from a sequencing error; a much deeper assay, such as a targeted panel, helps.</Option>
<Option>About 50%, like an inherited heterozygous variant, so 30x is more than enough to find it.</Option>
<Option>About 30%, like any clonal mutation in this sample, so a modest depth will find it.</Option>
<Option>About 20%, because the normal cells in the sample carry the mutation too and add to its reads.</Option>

<Explanation>

Normal cells carry only the reference base and dilute the signal: a clonal mutation shows in about 30% of reads in a 60% tumor sample, and one carried by a third of the cancer cells in about 10%. At 30x, that is about three reads, so finding variants like this takes much more depth, and panels are read to hundreds or thousands of x. See [Reading Clones in the Data](02-cancer-biology/05-how-tumors-evolve.md#reading-clones-in-the-data), [Coverage and Depth](04-next-generation-sequencing/05-types-of-sequencing/00-introduction.md#coverage-and-depth) and [Targeted Sequencing](04-next-generation-sequencing/05-types-of-sequencing/04-targeted-sequencing.md#depth-and-read-setup).

</Explanation>
</Question>

<Question>

A leukemia may carry a kinase fusion like *BCR-ABL1*. In DNA, its breakpoints can fall anywhere in introns that may be tens of thousands of bases long, often in repeats. Which approach does the guide favor to find the fusion and show that the fused gene is expressed?

<Option>Whole-exome sequencing, because a fusion joins exons from two genes and the exome holds every exon.</Option>
<Option>Copy number analysis of read depth from a genome, because a translocation between two chromosomes always changes depth.</Option>
<Option>ATAC-seq, because the fused gene sits in DNA that is open and could be active.</Option>
<Option correct>RNA-seq, because splicing removes the introns, so reads cross the join between two known exons and read pairs have one read in each gene.</Option>

<Explanation>

In RNA, the fusion shows up as two known exons joined together, and finding it there also confirms the fused gene is expressed. Exomes miss most structural variants because their breakpoints fall outside exons, and a balanced translocation leaves read depth unchanged. A chromosome rearrangement is one of the three main ways a proto-oncogene becomes an oncogene. See [Finding Fusions](03-genomic-variation/04-structural-variation.md#finding-fusions), [RNA-seq Tradeoffs](04-next-generation-sequencing/05-types-of-sequencing/03-rna-seq.md#tradeoffs), [Whole-Exome Tradeoffs](04-next-generation-sequencing/05-types-of-sequencing/02-whole-exome-sequencing.md#tradeoffs), [Finding Structural Variants](03-genomic-variation/04-structural-variation.md#finding-structural-variants) and [Oncogenes](02-cancer-biology/03-oncogenes-and-tumor-suppressors.md#oncogenes).

</Explanation>
</Question>

<Question multiple>

A colorectal tumor shows microsatellite instability (MSI). The patient has no inherited variant, and whole-genome sequencing finds no change in the sequence of the mismatch repair gene *MLH1*. Which statements fit the guide?

<Option correct>The CpG island at the *MLH1* promoter may be heavily methylated, which can switch the gene off without changing its sequence.</Option>
<Option correct>Standard sequencing reads 5-methylcytosine as an ordinary C, so methylation needs its own method, such as bisulfite sequencing or long reads.</Option>
<Option>A capture panel would show the methylation, because PCR copies carry the original marks into the reads.</Option>
<Option correct>The tumor is likely to carry many indels in runs of one base and short repeats across the genome.</Option>
<Option>Losing *MLH1* makes the cell grow on its own, the way a stuck oncogene does.</Option>

<Explanation>

In most colorectal cancers with MSI that were not inherited, *MLH1* is switched off by promoter methylation. Methylation is invisible to standard sequencing, and PCR copies are built from unmarked bases, so the marks are lost. Without mismatch repair, slips at microsatellites pile up as indels. DNA repair genes don't make a cell grow by themselves; they speed up changes in genes that do. See [Tumor Suppressors](02-cancer-biology/03-oncogenes-and-tumor-suppressors.md#tumor-suppressors), [Genes That Guard the Genome](02-cancer-biology/03-oncogenes-and-tumor-suppressors.md#genes-that-guard-the-genome), [Too Little and Too Much Methylation](07-advanced-topics/epigenetic-modifications.md#too-little-and-too-much-methylation), [Measuring the Marks](07-advanced-topics/epigenetic-modifications.md#measuring-the-marks), [Making Copies](04-next-generation-sequencing/02-library-preparation.md#making-copies) and [Where Indels Happen](03-genomic-variation/03-insertions-and-deletions.md#where-indels-happen).

</Explanation>
</Question>

<Question answer={false}>

Whole-exome sequencing of a melanoma is a good way to find the recurrent *TERT* promoter SNVs seen in about 70% of melanomas.

<Explanation>

A promoter sits just before the start of a gene, outside the exons, and exome sequencing reads only exons, so variants in promoters aren't read at all. Finding these drivers takes whole-genome sequencing or a panel designed to include them. See [Genomic Regions and Transcription](01-biological-foundations/03-transcription.md#genomic-regions-and-transcription), [Linking SNVs to Disease](03-genomic-variation/02-single-nucleotide-variation.md#linking-snvs-to-disease) and [Whole-Exome Tradeoffs](04-next-generation-sequencing/05-types-of-sequencing/02-whole-exome-sequencing.md#tradeoffs).

</Explanation>
</Question>

<Question>

A melanoma biopsy kept as FFPE tissue gives many C-to-T calls, most of them at low allele fractions. Which reading follows the guide?

<Option>Ultraviolet light mostly turns C into T, so these calls are the tumor's UV signature and can all be trusted.</Option>
<Option>They are poly-G tails from a two-color instrument, which trimming tools remove.</Option>
<Option>They must be germline, because C-to-T is the most common change in every genome.</Option>
<Option correct>Formalin can turn cytosine into uracil, which the sequencer reads as thymine, so they may be damage; treating the DNA to remove uracil cuts these, and important calls should be confirmed another way.</Option>

<Explanation>

FFPE data carries false C-to-T changes at low fractions that look like real variants. UV light also mostly turns C into T, so the kind of change alone doesn't clear these calls: low-fraction C-to-T calls from FFPE deserve suspicion, and a second method should confirm the important ones. Poly-G tails are runs of G at read ends, not C-to-T changes. See [Keeping DNA and RNA Intact](04-next-generation-sequencing/01-samples-and-extraction.md#keeping-dna-and-rna-intact), [Where Somatic SNVs Come From](03-genomic-variation/02-single-nucleotide-variation.md#where-somatic-snvs-come-from) and [Errors to Know About](04-next-generation-sequencing/03-short-read-sequencing.md#errors-to-know-about).

</Explanation>
</Question>

<Question>

An exome library was amplified by PCR after capture. After mapping, three read pairs share both outer ends, face the same way, and all show the same base that differs from the reference. How should they be treated?

<Option>As three independent reads, which together give strong support for a real variant.</Option>
<Option>As errors to delete: duplicate marking removes two of the pairs from the BAM file to save space.</Option>
<Option correct>As copies of one fragment: duplicate marking keeps one pair and sets flag 1024 on the others, so the change counts as support from one fragment.</Option>
<Option>As three different fragments, because exome libraries are never amplified by PCR.</Option>

<Explanation>

PCR copies of one fragment start and end at the same places, and a PCR error in an early cycle is copied into every later copy. Duplicate marking keeps the pair with the highest base qualities and flags the rest as duplicates (`0x400`, or 1024); they stay in the file, and many tools, including the `bcftools` caller, skip them. Capture-based libraries such as exomes need PCR after capture. See [Making Copies](04-next-generation-sequencing/02-library-preparation.md#making-copies), [Marking Duplicates](05-from-reads-to-variants/03-preparing-alignments.md#marking-duplicates) and [Flags](06-genomic-file-formats/03-BAM-files.md#flags).

</Explanation>
</Question>

<Question answer={false}>

A sample carries two harmful variants in the same gene, and the VCF file gives both the genotype `0/1`. These two calls are enough to tell whether one copy of the gene is still intact.

<Explanation>

The `/` means the genotypes are unphased: they don't say which copy carries which allele. Both variants could sit on one copy, leaving the other intact, or one could sit on each copy. Phasing settles it, for example with reads long enough to cover both positions or with the parents' genotypes, and a phased VCF writes it with `|`. See [Same Genotype, Different Haplotypes](01-biological-foundations/06-genotype-phenotype-haplotype.md#same-genotype-different-haplotypes), [Genotypes](06-genomic-file-formats/04-VCF-files.md#genotypes) and [What Long Reads Are For](04-next-generation-sequencing/04-long-read-sequencing.md#what-long-reads-are-for).

</Explanation>
</Question>

<Question multiple>

Your tumor BAM files were mapped to GRCh38, with chromosomes named `chr1`, `chr2` and so on. A collaborator sends a BED file of hotspot positions to check, with chromosomes named `1`, `2` and so on. Which statements are correct?

<Option correct>The same variant can have different coordinates in different versions: *TERT* C228T is at `chr5:1,295,113` in GRCh38 but `chr5:1,295,228` in GRCh37.</Option>
<Option>If one file names a chromosome `5` and the other `chr5`, tools reliably stop with an error.</Option>
<Option correct>The names and lengths in the `@SQ` lines of a BAM header are a quick way to tell which version of the reference it was mapped to.</Option>
<Option>Patches such as `GRCh38.p14` move existing coordinates, so a patch mismatch is as serious as a version mismatch.</Option>
<Option correct>Nothing in a BED file says which reference genome its positions belong to.</Option>

<Explanation>

Coordinates don't carry over between versions, and results from two versions can't be compared directly, so the BED file's version must come from wherever it came from. Tools given different naming conventions often report no matches at all instead of an error. Patches fix errors and add sequence without moving existing coordinates. See [Versions and Their Traps](03-genomic-variation/01-baselines-for-variation.md#versions-and-their-traps), [Linking SNVs to Disease](03-genomic-variation/02-single-nucleotide-variation.md#linking-snvs-to-disease), [Choosing a Reference](05-from-reads-to-variants/02-read-mapping.md#choosing-a-reference), [The Header](06-genomic-file-formats/03-BAM-files.md#the-header) and [BED Files](06-genomic-file-formats/05-BED-files.md).

</Explanation>
</Question>

</Quiz>
