---
title: "Quiz: Genomic Variation"
sidebar_label: Chapter Quiz
description: "Check your understanding of the reference genome and its versions, germline and somatic variants, SNVs, indels, structural and copy number variants, and why one variant can be written in several ways."
quiz: true
hide_table_of_contents: true
---

Test what you learned in this chapter, from what a variant is measured against to why two tools can describe the same change differently. Each answer links back to the section it comes from, and you can retake the quiz as often as you like.

<Quiz>

<Question answer={false}>

At any position, the reference allele is the healthy version, or at least the most common one in the population.

<Explanation>

The reference allele only means "whatever the reference has". At many positions the reference carries the rarer allele, and it has even carried alleles linked to a higher risk of disease, including type 1 diabetes. See [Baselines for Variation](01-baselines-for-variation.md#the-reference-genome).

</Explanation>
</Question>

<Question multiple>

Which of these statements about reference genome versions are true?

<Option correct>A variant's coordinate in GRCh38 can differ from its coordinate in GRCh37</Option>
<Option>Patches such as `GRCh38.p14` move existing coordinates to make room for new sequence</Option>
<Option correct>A tool given one file that names chromosomes `chr1` and another that names them `1` may report no matches instead of an error</Option>
<Option>`hg19` and `GRCh37` are identical in every sequence, including the mitochondrial one</Option>

<Explanation>

F508del is at `chr7:117,559,592` in GRCh38 but `chr7:117,199,646` in GRCh37, and mixed naming conventions often give no matches rather than an error. Patches fix errors and add sequence without moving any existing coordinates, and `hg19` and `GRCh37` have different mitochondrial sequences. See [Baselines for Variation](01-baselines-for-variation.md#versions-and-their-traps).

</Explanation>
</Question>

<Question>

An analyst sequences a tumor and a matched normal blood sample from the same person. A variant shows up in the tumor but not in the blood. What is it most likely to be?

<Option>A germline variant, because both samples come from the same person</Option>
<Option correct>A somatic variant that arose in the tumor's cells</Option>
<Option>An inherited variant that the person's children may also carry</Option>
<Option>A common SNP that population databases would set aside</Option>

<Explanation>

Variants found in both the tumor and the matched normal are germline, while variants found only in the tumor are likely somatic. Somatic variants pass only to the descendants of the cell where they arose, never to a person's children. See [Baselines for Variation](01-baselines-for-variation.md#a-second-baseline-the-persons-own-dna).

</Explanation>
</Question>

<Question>

An SNV in a coding sequence turns a codon into a stop codon, as G542X does in *CFTR*. What kind of variant is this?

<Option>Synonymous</Option>
<Option>Missense</Option>
<Option correct>Nonsense</Option>
<Option>Frameshift</Option>

<Explanation>

A nonsense variant creates a stop codon and cuts the protein short. A synonymous change keeps the same amino acid and a missense change swaps in a different one; a frameshift comes from an indel whose length is not a multiple of three, not from a single base swap. See [Single Nucleotide Variation](02-single-nucleotide-variation.md#what-an-snv-can-do).

</Explanation>
</Question>

<Question>

A tumor carries thousands of somatic SNVs. Which clue most strongly suggests that one of them is a driver rather than a passenger?

<Option correct>The same variant turns up at the same position in many other tumors</Option>
<Option>It is carried by more than 1% of people in a population frequency database</Option>
<Option>It is a synonymous change in a gene known to be involved in cancer</Option>
<Option>It appears in both the tumor and the matched normal sample</Option>

<Explanation>

Recurrence is the strongest clue: a variant seen at the same position in many tumors, as *BRAF* V600E is, is likely a driver. A variant common in the population, or one also present in the matched normal, is almost always inherited, not somatic. See [Single Nucleotide Variation](02-single-nucleotide-variation.md#linking-snvs-to-disease).

</Explanation>
</Question>

<Question>

The sample reads `ACAATA` where the reference reads `ACAGCCATA`, because `GCC` was deleted. How does a VCF file write this deletion?

<Option>REF `A`, ALT `AGCC`</Option>
<Option>REF `GCC`, with an empty ALT</Option>
<Option>REF `ACAGCCATA`, ALT `ACAATA`</Option>
<Option correct>REF `AGCC`, ALT `A`</Option>

<Explanation>

VCF writes an indel with one extra base, the shared base just before it, so neither side is empty: the deletion becomes REF `AGCC`, ALT `A`. REF `A`, ALT `AGCC` is the reverse, which would be an insertion. See [Insertions and Deletions](03-insertions-and-deletions.md#describing-and-finding-indels).

</Explanation>
</Question>

<Question multiple>

A caller looks only at read depth. Which of these structural variants would it miss?

<Option correct>An inversion</Option>
<Option>A deletion</Option>
<Option>A tandem duplication</Option>
<Option correct>A translocation in which two chromosomes trade pieces and nothing is lost</Option>

<Explanation>

Inversions and balanced translocations move sequence around without gaining or losing any, so read depth stays the same; callers need split reads or discordant pairs to find them. A deletion lowers depth and a tandem duplication raises it. See [Structural Variation](04-structural-variation.md#breakpoints-and-junctions) and [Finding Structural Variants](04-structural-variation.md#finding-structural-variants).

</Explanation>
</Question>

<Question answer={false}>

A gene fusion can only form when a translocation moves part of one chromosome onto another.

<Explanation>

Fusions don't need translocations. *TMPRSS2-ERG* most often forms when the stretch between the two genes on chromosome 21 is deleted, and *EML4-ALK* comes from a small inversion on chromosome 2. See [Structural Variation](04-structural-variation.md#gene-fusions).

</Explanation>
</Question>

<Question>

In one region of a tumor, read depth looks normal, but every site that is heterozygous in the matched normal now reads as homozygous. What best explains this?

<Option>Loss of one copy of the region</Option>
<Option>A tandem duplication that leaves three copies</Option>
<Option correct>Copy-neutral loss of heterozygosity</Option>
<Option>Normal cells mixed into the tumor sample</Option>

<Explanation>

In copy-neutral LOH, the cell loses one copy and copies the other, so it still has two copies and depth looks normal, but the two copies are identical. A one-copy loss would lower depth, and a gain would raise depth and split allele fractions to about one-third and two-thirds. See [Copy Number Variation](05-copy-number-variation.md#allele-fractions).

</Explanation>
</Question>

<Question>

The reference reads `TCGGTC` and the sample reads `TCGAAATC`. One caller writes a G-to-A change plus an `AA` insertion; another writes REF `G`, ALT `AAA`. Which approach recognizes these as the same variant?

<Option>Normalizing both call sets with `bcftools norm`, then matching records</Option>
<Option correct>Applying each set to the reference and comparing the resulting sequences</Option>
<Option>Matching records on exact position, REF and ALT</Option>
<Option>Lifting both call sets over to a different reference version first</Option>

<Explanation>

Tools such as `hap.py` and `vcfeval` apply each set of variants to the reference; both give `TCGAAATC`, so they match however they were written. Normalization left-aligns and trims records but doesn't merge separate ones, so these descriptions still won't match after it. See [Variant Equivalence](06-variant-equivalence.md#making-descriptions-match).

</Explanation>
</Question>

</Quiz>
