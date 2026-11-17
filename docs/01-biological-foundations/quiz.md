---
title: "Quiz: Biological Foundations"
sidebar_label: Chapter Quiz
description: "Check your understanding of DNA and chromosomes, the central dogma, transcription, translation, protein folding, and how haplotype, genotype and phenotype relate."
quiz: true
hide_table_of_contents: true
---

Test what you learned in this chapter, from how DNA is packaged to why phasing matters. Each answer links back to the section it comes from, and you can retake the quiz as often as you like.

<Quiz>

<Question>

Inside the nucleus, DNA wraps around proteins called histones to form chromatin. What does **loosely** packed chromatin do?

<Option>It unwinds the double helix into a single strand that ribosomes can read</Option>
<Option>It marks where one chromosome ends and the next one begins</Option>
<Option correct>It leaves genes accessible, which helps control which gene products a cell makes</Option>
<Option>It keeps the sex chromosomes separate from the autosomes</Option>

<Explanation>

Tightly packed chromatin keeps the long DNA string compact, while loosely packed chromatin leaves genes accessible. This helps control which gene products are made in a given cell. See [Cells, Chromosomes, and Genomes](01-cells-genomes-dna-chromosomes.md#how-dna-is-packaged).

</Explanation>
</Question>

<Question answer={true}>

If you know the sequence of one strand of DNA, you can work out the sequence of the other strand.

<Explanation>

The two strands are complementary: `A` pairs only with `T`, and `G` only with `C`. This is also why each strand can serve as a template for a new copy when a cell divides. See [Cells, Chromosomes, and Genomes](01-cells-genomes-dna-chromosomes.md#a-mental-model-for-dna).

</Explanation>
</Question>

<Question multiple>

Which statements about how genetic information flows in a cell are true?

<Option correct>Some viruses use reverse transcriptase to copy RNA back into DNA.</Option>
<Option>A protein's amino acid sequence can be copied back into RNA.</Option>
<Option correct>A mutation in a gene's DNA is copied into every RNA made from that gene.</Option>
<Option>A gene's DNA leaves the nucleus so that ribosomes can read it.</Option>
<Option correct>Some RNAs, such as transfer RNAs, do their jobs without becoming protein.</Option>

<Explanation>

Information can flow from RNA back to DNA, but never back out of a protein. The DNA itself never leaves the nucleus; ribosomes read the mRNA copy. A mutation lasts because every RNA made from the gene carries it, and ribosomal and transfer RNAs work as RNA. See [The Central Dogma](02-the-central-dogma.md#from-dna-to-protein).

</Explanation>
</Question>

<Question>

The coding strand of a short stretch of a gene reads `ATGCCTGAG`. What sequence does RNA polymerase build from this stretch?

<Option>`UACGGACUC`</Option>
<Option correct>`AUGCCUGAG`</Option>
<Option>`TACGGACTC`</Option>
<Option>`ATGCCTGAG`</Option>

<Explanation>

RNA polymerase reads the template strand, so the RNA has the same sequence as the coding strand, but with `U` in place of `T`. `UACGGACUC` is the complement of the coding strand, which is the sequence of the template strand written with `U`. See [Transcription](03-transcription.md#how-transcription-works).

</Explanation>
</Question>

<Question>

How can a single gene produce several different versions of its protein?

<Option>RNA polymerase reads the coding strand in some cells and the template strand in others</Option>
<Option>Some cells keep the introns in the mature mRNA and translate them</Option>
<Option>The ribosome reads each copy of the mRNA in a different reading frame</Option>
<Option correct>Cells can skip some exons or choose between them, which makes different mRNA isoforms</Option>

<Explanation>

In alternative splicing, a cell can skip some exons or choose between alternatives, so one gene can produce several mRNAs, called isoforms. Introns are always cut out, and RNA polymerase always reads the template strand. See [Transcription](03-transcription.md#alternative-splicing).

</Explanation>
</Question>

<Question answer={false}>

Only about 1% of the human genome codes for protein, so variants outside exons cannot contribute to disease.

<Explanation>

A change in a promoter or enhancer can alter how much a gene is transcribed, and a change near the edge of an exon can alter splicing. These noncoding variants are harder to interpret, but they can be important in disease. See [Transcription](03-transcription.md#how-transcription-works).

</Explanation>
</Question>

<Question multiple>

Which of these changes to a gene can dramatically alter the protein it makes? Codons are shown as they appear in mRNA.

<Option correct>An insertion of two bases in the middle of the coding sequence</Option>
<Option>A change of the codon `CGU` to `CGC`</Option>
<Option correct>A change that turns a codon in the middle of the gene into a stop codon</Option>
<Option correct>A change to the start codon `AUG` so that it is no longer a start codon</Option>

<Explanation>

An insertion whose length is not a multiple of three shifts the reading frame, and changes that create or remove a start or stop codon can dramatically alter the protein. Every codon that starts with `CG` codes for arginine, so `CGU` to `CGC` is a synonymous variant. See [Translation](04-translation.md#reading-frames) and [Translation](04-translation.md#decoding-the-transcript).

</Explanation>
</Question>

<Question>

The most common cystic fibrosis variant, F508del, deletes three bases from the *CFTR* gene. Why does it cause disease?

<Option correct>The protein loses one amino acid, misfolds, and is destroyed before it reaches the cell surface</Option>
<Option>It shifts the reading frame, so every amino acid after the deletion is different from the original protein</Option>
<Option>It turns codon 508 into a stop codon, so the ribosome releases a protein that is cut short</Option>
<Option>It removes the signal peptide, so the protein stays in the fluid inside the cell</Option>

<Explanation>

Three bases make exactly one codon, so the reading frame is kept and only one amino acid is lost. That is enough to make the protein misfold, and the ER catches and destroys it. See [Protein Folding and Modification](05-protein-folding-and-modification.md#from-chain-to-shape) and [Protein Folding and Modification](05-protein-folding-and-modification.md#getting-to-the-right-place).

</Explanation>
</Question>

<Question>

A lab finds a large amount of a particular kinase in a cell. Why can't it conclude that the kinase is very active?

<Option>Each kinase can act on only one target and is then destroyed</Option>
<Option>Kinases are active only while they are inside the nucleus</Option>
<Option correct>Phosphates added to or removed from the kinase can switch it on or off</Option>
<Option>Cells use a different genetic code to make kinases</Option>

<Explanation>

Many kinases are switched on when another kinase adds phosphates to their activation loop, and phosphatases switch them back off. Because of modifications like this, the amount of a protein in a cell doesn't tell you how much of it is active. See [Protein Folding and Modification](05-protein-folding-and-modification.md#post-translational-modifications) and [Protein Folding and Modification](05-protein-folding-and-modification.md#kinases-as-switches).

</Explanation>
</Question>

<Question>

Two people are each heterozygous for the same two harmful *CFTR* variants, F508del and G542X. One has cystic fibrosis and the other does not. What explains the difference?

<Option>Only one of them has a homozygous genotype call at one of the two positions</Option>
<Option correct>Whether the two variants sit on the same copy of the gene or on different copies</Option>
<Option>How many mRNA copies of *CFTR* each person's cells make</Option>
<Option>Whether each variant falls in an exon or an intron</Option>

<Explanation>

Their genotype calls are identical, but their haplotypes differ. If both variants are on one copy, the other copy still makes working protein, and the person is a carrier; if each copy carries one variant, neither copy works. Working this out is called phasing. See [Haplotype, Genotype and Phenotype](06-genotype-phenotype-haplotype.md#same-genotype-different-haplotypes).

</Explanation>
</Question>

</Quiz>
